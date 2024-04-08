import mongoose from "mongoose";

const schema = new mongoose.Schema({
    conversationId:{
        type : String,
    },
    senderId:{
        type: String,
    },
    receiverId:{
       type:String,
    },
    text:{
        type:String,
     },
     type:{
        type:String,
     },
   
},
{
    timestamps: true,
}


);
 




export const Message = mongoose.model("message" , schema);
