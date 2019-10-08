const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  profilepic: {
    type: String,
    default:
      'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/039_girl_avatar_profile_woman_headband-512.png'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Person = mongoose.model('myPerson', PersonSchema);
