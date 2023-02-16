const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user_schema');
const jwt = require('jsonwebtoken');
const { signUp } = require('../controllers/user_controller');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router
.post('/signUp', signUp);

router.post('/login', async (req, res) => {

  const { email, password } = req.body;
  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email' });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid Password' });
    }
 
    const token = jwt.sign({ email: user.email }, 'your_secret_key');
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

});
router.get('/test', isAuthenticated, (req, res) => {
  res.json({ message: 'u are in <3' });
});

/*
router
  .post('/', createData)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);
  */

module.exports = router;
