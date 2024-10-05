import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const BookSchema = new Schema({
    title: String,
    author: String,
})

export default mongoose.model("Book", BookSchema);