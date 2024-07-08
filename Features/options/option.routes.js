import express from 'express';
import { OptionController } from './option.controller.js';


export const optionRouter = express.Router();

const optionObj = new OptionController();

optionRouter.post('/:id/add_vote',(req,res,next)=>{
    optionObj.addVoteController(req,res,next);
});

optionRouter.delete('/:id/delete/',(req,res,next)=>{
    optionObj.deleteOptionController(req,res,next);
})