const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route     POST api/users
// @desc      Regiter a user
// @access    Public
router.post(
  '/',
  [
    check('name', 'Please add name')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password,number,address,city,pincode,profession } = req.body;

    let img="http://cdn.onlinewebfonts.com/svg/img_568657.png";

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        email,
        password,
        number,
        city,
        address,
        pincode,
        profession,
        img
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
          name:user.name,
          number:user.number,
          email:user.email,
          city:user.city,
          profession:user.profession,
          img:user.img
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


router.put('/:id', auth, async (req, res) => {
  const { name, email, number,address,city,pincode,profession,img } = req.body;


  const userFields= {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (number) userFields.number= number;
  if (address) userFields.address = address;
  if (city) userFields.city = city;
  if (pincode) userFields.pincode = pincode;
  if (profession) userFields.profession = profession;
  if (img) userFields.img = img;

  try {
    let user= await User.findById(req.params.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

   

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
    const payload = {
      user: {
        id: user.id,
        name:user.name,
        number:user.number,
        email:user.email,
        city:user.city,
        profession: user.profession,
        img: user.img
      }
    };
    jwt.sign(
      payload,
      config.get('jwtSecret'),
      {
        expiresIn: 360000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
