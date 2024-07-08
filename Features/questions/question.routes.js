import express from 'express';
import { QuestionController } from './question.controller.js';


export const questionRouter = express.Router();

const questionObj = new QuestionController();


questionRouter.get('/',(req,res,next)=>{
    questionObj.allQuestionViewController(req,res,next);
})


questionRouter.post('/create',(req,res,next)=>{
    questionObj.createQuestionController(req,res,next);
});

questionRouter.post('/:id/options/create',(req,res,next)=>{
    questionObj.addOptionController(req,res,next);
});

questionRouter.delete('/:id/delete',(req,res,next)=>{
    questionObj.deleteQuestionController(req,res,next);
});

questionRouter.get('/:id',(req,res,next)=>{
    questionObj.questionViewController(req,res,next);
});
