import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String, 
  email: String,
  phone:String,
  education:String

});
const User = mongoose.model('User', userSchema);

export default User