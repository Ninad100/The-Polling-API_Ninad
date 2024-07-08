import { CustomErrorHandler } from "../../error.handler.js";
import { QuestionRepository } from "./question.repository.js";



export class QuestionController{
    constructor(){
        this.questionRepository = new QuestionRepository();
    }


    //create question

    async createQuestionController(req,res,next){
        try{
            console.log(req.body)
            const question = await this.questionRepository.createQuestion(req.body.title);
            if(question.success){
                res.status(200).json({success:true,question: question.questionEle})
            }else{
                next(new CustomErrorHandler(400,question.message))
            }
        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err));
        }
    }

    //To create and add option to the question

    async addOptionController(req,res,next){
        try{
            const questionId = req.params.id;
            const optionText = req.body.optionText;

            const optionAdded = await this.questionRepository.addOption(questionId,optionText);
            if(optionAdded.success){
                res.status(200).json({success:true,question: optionAdded.question})
            }else{
                next(new CustomErrorHandler(optionAdded.message,400));
            }

        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }


    //Delete the Question

    async deleteQuestionController(req,res,next){
        const id = req.params.id;
        try{
            const deleted = await this.questionRepository.deleteQuestion(id);
            if(deleted.success){
                res.status(200).json({success:true,message:"Question Deleted successfully."})
            }else{
                res.status(400).json({success:false,message:deleted.message})
            }
        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }

    //To view a particular question and its options
    async questionViewController(req,res,next){
        const id = req.params.id;

        try{
            const question = await this.questionRepository.viewSingleQuestion(id)
            if(question.success){
                res.status(200).json({success:true,question: question.questionEle});
            }else{
                res.status(400).json({success:false,message:question.message})
            }
            
        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }

    //View All questions

    async allQuestionViewController(req,res,next){
        try{
            const questionArr = await this.questionRepository.allQuestionView();
            if(questionArr.success){
                res.status(200).json({success:true,questions:questionArr.arr});
            }else{
                res.status(400).json({success:false,message:questionArr.message})
            }
        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }
}