import { CustomErrorHandler } from "../../error.handler.js";
import { OptionRepository } from "./option.repository.js";



export class OptionController{

    constructor(){
        this.optionRepository = new OptionRepository();
    }

    //Add vote to option
    async addVoteController(req,res,next){
        try{
            const id = req.params.id
            const voteAdded = await this.optionRepository.addVote(id);
            if(voteAdded.success){
                res.status(200).json({success:true,question: voteAdded.question});
            }else{
                nres.status(400).json({success:false,message:voteAdded.message})
            }

        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }

    //Deleting an option
    async deleteOptionController(req,res,next){
        try{
            const id = req.params.id;
            const deleted = await this.optionRepository.deleteOption(id);
            if(deleted.success){
                res.status(200).json({success:true,question: deleted.question});
            }else{
                res.status(400).json({success:false,message:deleted.message})
            }
        }catch(err){
            console.log(err);
            next(new CustomErrorHandler(500,err))
        }
    }

    

}

