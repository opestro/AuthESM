const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, 'name field is required'],
    },
    email: {
      type: String,
      required: [true, 'email field is required'],
    },
    password: {
      type: String,
      required: [true, 'password field is required'],
    },
    roll: {
        type: String,
        required: false
      },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next){
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
       this.password = hash
       this.roll = 'user'
       next();
    }
    catch(e){
        next(e);
    }
});

module.exports = model('user', userSchema);
