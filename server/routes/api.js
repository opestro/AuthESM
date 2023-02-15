const express = require('express');


const {
  createData,
  readData,
  updateData,
  deleteData,
} = require('../controllers/user_controller');

const {
  signIn,
  signUp,
} = require('../controllers/login_controller');
const router = express.Router();

router
.post('/login', signUp)
.get('/login', signIn)
;
router
  .post('/', createData)
  .get('/', readData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);

module.exports = router;
