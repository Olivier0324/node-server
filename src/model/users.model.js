import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    }
}, {
    createdAt: true,
    updatedAt: true
})
export const User = model('User', userSchema);