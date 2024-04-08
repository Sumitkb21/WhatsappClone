import mongoose from "mongoose";

const schema = new mongoose.Schema({
    members:{
        type : Array,
    },
    message:{
        type : String,
    }},
    {
        timestamps:true
    }
);
 




export const Conversation = mongoose.model("conversations" , schema);