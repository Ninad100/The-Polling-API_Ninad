import mongoose from "mongoose";
import { optionSchema } from "../options/option.schema.js";

export const questionSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    options: [
        optionSchema
    ],
    deleteFlag: {type:Boolean, default: true}
});