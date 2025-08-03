import mongoose, { Schema, Document } from 'mongoose';


export interface User extends Document {
  username?: string;
  rating: number;
  review: string;
  date?: Date;
}

// Updated User schema
const ReviewsSchema = new mongoose.Schema({
 username :{
    type:String,
    required:false,
    default:function(){
      return `User-${Date.now()}`;
    }
 },
 rating:{
    type:Number,
    required:true,
    min:0,
    max:5,
    default:4
 },
 review:{
    type:String,
    required:true,
 },
 date:{
    type:Date,
    required:true,
    default:Date.now()
 }
});

const ReviewsModel =
  (mongoose.models.Reviews as mongoose.Model<User>) ||
  mongoose.model<User>('Reviews', ReviewsSchema);

export default ReviewsModel;
