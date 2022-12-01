const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/+.@+.\.+./,'Enter Valid email']
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
     ref: 'Thought'
    }],
    friends: [
      {
        type: Schema.Types.ObjectId,
     ref: 'User'
      }
    ]
   
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})

const User = model('User', userSchema);

module.exports = User;
