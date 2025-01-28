const mongoose=require('mongoose')

const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      default: ['user'],
    },
    profile: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
    },
    lastLogin: {
      type: Date,
      default: new Date.now(),
    },
  }, {
    timestamps: true,
  });
  
  module.exports = mongoose.model('User', userSchema);