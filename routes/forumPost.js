const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const ForumPost = require('../models/ForumPost');
const Comment =require("../models/Comment");


// GET Request to opening forum page

router.get('/', async (req, res) => {
    try {
      const forumPosts = await ForumPost.find({}).sort({
        date: -1
      });
      res.json(forumPosts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// POST request to opening forum page

router.post(
    '/',
    [
      auth,
      [
        check('title', 'Title is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      let { title, subject, desc, img } = req.body;

      (img=="")&&(img="https://www.hotelsagarpriya.com/images/booking/no-photo.png");
  
      try {
        const newForumPost = new ForumPost({
          title,
          subject,
          desc,
          img,
          userName: req.user.name,
          user: req.user.id
        });

        const forumPost = await newForumPost.save();
  
        res.json(forumPost);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
);

// PUT request to opening forum page

router.put('/:id', auth, async (req, res) => {
    const { title, subject, desc, img } = req.body;
  
    // Build forumPost object
    const forumPostFields = {};
    if (title) forumPostFields.title = title;
    if (desc) forumPostFields.desc = desc;
    if (subject) forumPostFields.subject= subject;
    if (img) forumPostFields.img = img;

    try {
      let forumPost = await ForumPost.findById(req.params.id);
  
      if (!forumPost) return res.status(404).json({ msg: 'ForumPost not found' });
  
      // Make sure user owns forumPost
      if (forumPost.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      forumPost = await ForumPost.findByIdAndUpdate(
        req.params.id,
        { $set: forumPostFields },
        { new: true }
      );
  
      res.json(forumPost);
    } catch (err) {
      console.error(err.message);s
      res.status(500).send('Server Error');
    }
});

// DELETE request to opening forum page

router.delete('/:id', auth, async (req, res) => {
    try {
      let forumPost = await ForumPost.findById(req.params.id);
  
      if (!forumPost) return res.status(404).json({ msg: 'ForumPost not found' });
  
      // Make sure user owns forumPost
      if (forumPost.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      await ForumPost.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'ForumPost removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// GET request to COMMENTS

router.get('/:id/comments', async (req, res) => {
    
    try {
      const comments = await Comment.find({post:req.params.id}).sort({
        date: -1
      });
      res.json(comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// DELETE route for COMMENTS

router.delete('/comments/:id', auth, async (req, res) => {
    try {
      let comment = await Comment.findById(req.params.id);
  
      if (!comment) return res.status(404).json({ msg: 'comment not found' });
  
      // Make sure user owns forumPost
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      await Comment.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'comment removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

// POST route for COMMENTS

router.post(
    '/:id/comments',
    [
      auth,
      [
        check('text', 'Text is required')
          .not()
          .isEmpty()
      ]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { text } = req.body;
  
      try {
        const newComment = new Comment({
          text,
          post: req.params.id,
          userName: req.user.name,
          user: req.user.id,
          img:req.user.img
        });
  
        const comment = await newComment.save();
  
        res.json(comment);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
);


module.exports = router;