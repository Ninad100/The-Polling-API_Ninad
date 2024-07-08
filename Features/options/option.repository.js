import mongoose from "mongoose";
import { optionSchema } from "./option.schema.js";
import { questionSchema } from "../questions/question.schema.js";


const optionModel = mongoose.model('options',optionSchema);
const questionM = mongoose.model('questions',questionSchema);

export class OptionRepository{

    async addVote(id){
        try{
            const option = await optionModel.findById({_id: id});
            if(!option){
                return {success:false,message:'Error in adding vote'}
            }
            option.votes += 1;
            option.deleteFlag = false;
            await option.save();

            const question = await questionM.findOneAndUpdate({_id: option.questionId, "options._id": id},{
                $inc: {"options.$.votes": 1}, $set: {deleteFlag: false, "options.$.deleteFlag": false}
            },{new:true});
            //console.log(question);

            if(!question){
                return {success:false,message:'Internal error in adding vote'}
            }


            return {success:true, question: question}

        }catch(err){
            return {success:false, message:err}
        }

    }

    async deleteOption(id){
        try{
            const option = await optionModel.findOne({_id:id});
            if(!option){
                return {success:false,message:"No Option to delete"}
            }

            if(!option.deleteFlag){
                return {success:false, message: "Option has atleast one vote. Hence, Cant delete the option"}
            }

            const optionDelete = await optionModel.deleteOne({_id:id});
            

            const question = await questionM.findOneAndUpdate({"options._id":id},{
                $pull: {options: {_id: id}}
            },{new:true});
            
            return {success:true,question:question}

        }catch(err){
            return {success:false, message:err}
        }
    }
}