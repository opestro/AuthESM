'use strict';

const User = require('../models/user_schema');




const signUp = (req, res) => {

  User.create(req.body)
    .then((data) => {
      console.log('New User Created!', data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        console.error('Error Validating!', err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};




module.exports = {
  signUp
};
