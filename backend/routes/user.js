import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";


const router = express.Router();

router.post('/signup', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash
      });
      user.save().then(result => {
        res.status(201).json({
          success: true,
          data: result
        })
      }).catch((error) => {
        if (error === 11000) {
          console.log('User already exists!');
          res.status(500).json({
            success: false,
            data: 'User already exists!'
          });
        } else {
          console.log('Error saving...', error);
          res.status(500).json({
            success: false,
            data: error
          });
        }
      });
    });
});

router.post('/login', (req, res, next) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (!user) {
        return res.status(401).json({
          success: false,
          data: 'Could not find the user'
        });
      }
      return bcrypt.compare(req.body.password, user.password);
    }).then(result => {
    if (!result) {
      return res.status(401).json({
        success: false,
        data: 'password not found'
      });
    }
    const token = jwt.sign({email: req.body.email, UserId: req.body.password},
      process.env.JWT_SECRET_KEY,
      {expiresIn: '1h'});
    res.status(200).json({
      success: true,
      token: token,
      expiresIn:3600
    });

  }).catch(err => {
    console.log(err);
  });
});

export default router;
