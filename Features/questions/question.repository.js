import mongoose from "mongoose";
import { optionSchema } from "../options/option.schema.js";
import { questionSchema } from "./question.schema.js";



const optionModel = mongoose.model('options',optionSchema);
const questionM = mongoose.model('questions',questionSchema);


export class QuestionRepository{

    //Create Question

    async createQuestion(questionText){
        try{
            const question = new questionM({
                title: questionText
            });

            await question.save();

            if(question){
                return {success:true,questionEle: question}
            }else{
                return {success:false,message:'Error in creation question'}
            }
        }catch(err){
            console.log(err);
            return {success:false,message:err}
        }

    }

    //Add option to a question
    async addOption(questionId,questionText){
        try{
            const option = new optionModel({
                text: questionText,
                questionId: questionId
            });

            await option.save();

            if(option){
                option.link_to_vote = `http://localhost:3000/options/${option._id}/add_vote`;
            }else{
                return {success:false, message: 'Failed to create option'}
            }

            const question = await questionM.findById({_id: questionId });
            if(question){
                question.options.push(option);
                await question.save();
                return {success:true, question: question}
            }else{
                return {success:false, message:'Please try later'}
            }
            

            

           

        }catch(err){
            return {success:false,message:err}
        }
    }

    async deleteQuestion(id){
        try{
            const question = await questionM.findOne({_id:id});

            if(!question){
                return {success:false,message:"Question is not available to delete. Internal error"}
            }

            if(!question.deleteFlag){
                return {success:false,message:"Question has obtained some votes, hence, cant be deleted"}
            }

            const deleted = await questionM.deleteOne({_id:id});

            const optionsDelete = await optionModel.deleteMany({questionId: id});

            if(deleted && optionsDelete){
                return {success: true}
            }


        }catch(err){
            return {success:false,message:err}
        }
    }


    //To view a particular question
    async viewSingleQuestion(id){
        try{
            const question = await questionM.findOne({_id:id});
            if(!question){
                return {success:false,message:"Bad Request! No question found"}
            }else{
                return {success:true,questionEle:question}
            }
        }catch(err){
            console.log(err);
            return {success:false, message:err}
        }
    }

    //All question viewer
    async allQuestionView(){
        try{
            const questionArr = await questionM.find();
            if(questionArr){
                return {success:true, arr:questionArr}
            }else{
                return {success:false, message:'No questions found'}
            }
        }catch(err){
            console.log(err);
            return {success:false,message:err}
        }
    }
}