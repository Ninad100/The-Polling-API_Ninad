import mongoose from "mongoose";

export const optionSchema = new mongoose.Schema({
    text: {type: String},
    votes: {type: Number, default: 0},
    link_to_vote: {type: String},
    deleteFlag: {type: Boolean, default: true},
    questionId: {type: mongoose.Schema.Types.ObjectId, ref: 'questions'}
});