const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Add=require("../models/Add");
const { check, validationResult } = require('express-validator/check');




router.get("/",async(req,res)=>{

    try{
        const adds=await Add.find({});
        res.json(adds);
    }
    catch(err)
    {
        console.error(err.message);
      res.status(500).send('Server Error');
    }
})

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
  
      let { title,desc,price,img,number,location } = req.body;
      (img=="") && (img="https://www.liberaldictionary.com/wp-content/uploads/2019/01/a-d-6540.jpg");
      (number=="") && (number=req.user.number);
      (location=="") && (location=req.user.city);

      try {
        const newAdd = new Add({
          title,
          desc,
          price,
          img,
          userName: req.user.name,
          user: req.user.id,
          number,
          location,
          email: req.user.email
        });
        console.log(newAdd);
        const add= await newAdd.save();
  
        res.json(add);
    }
       catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );

  router.put('/:id', auth, async (req, res) => {
    const { title, price, desc, img ,number,location} = req.body;
  
    // Build adds object
    const addsFields = {};
    if (title) addsFields.title = title;
    if (desc) addsFields.desc = desc;
    if (price) addsFields.price= price;
    if (img) addsFields.img = img;
    if(number) addsFields.number=number;
    if(location) addsFields.location=location;

    try {
      let adds = await Add.findById(req.params.id);
  
      if (!adds) return res.status(404).json({ msg: 'Ad not found' });
  
      // Make sure user owns adds
      if (adds.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      adds = await Add.findByIdAndUpdate(
        req.params.id,
        { $set: addsFields },
        { new: true }
      );
  
      res.json(adds);
    } catch (err) {
      console.error(err.message);s
      res.status(500).send('Server Error');
    }
});

  router.delete('/:id', auth, async (req, res) => {
    try {
      let add = await Add.findById(req.params.id);
  
      if (!add) return res.status(404).json({ msg: 'ForumPost not found' });
  
      // Make sure user owns adds
      if (add.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'Not authorized' });
      }
  
      await Add.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'ForumPost removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  


module.exports = router;