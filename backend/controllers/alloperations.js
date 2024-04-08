import { Conversation } from "../models/conversations.js";
import { Message } from "../models/message.js";
import { Users } from "../models/userSchema.js";

export const addUser = async (req, res) => {
  try {
    const {
      iss,
      nbf,
      aud,
      sub,
      email,
      email_verified,
      azp,
      name,
      picture,
      given_name,
      family_name,
      iat,
      exp,
      jti,
    } = req.body;
    console.log("here I AM ");
    let exist = await Users.findOne({ sub });
    if (exist) {
      return res.status(400).json({
        success: false,
        message: "User Already exist",
      });
    }

    const newuser = await Users.create(req.body);
    if (newuser) {
      res.status(200).json({
        success: true,
        message: "User Created Successfully",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Not able to create",
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json({
      success: true,
      message: "Sent all Users Successfully",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Not able to send the all data from backend",
    });
  }
};

export const newConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    if (exist) {
      return res.status(200).json({
        message: "Conversation already exist !!",
      });
    }

    let convo = await Conversation.create({
      members: [senderId, receiverId],
    });

    if (convo) {
      res.status(200).json({
        success: true,
        message: "New two members conversation added",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can not able to create a new conversation",
    });
  }
};

export const getConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    let convo = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (convo) {
      return res.status(200).json({
        convo,
      });
    }
    res.status(401).json({
      success: false,
      message: "No conversation exist with these Two persons" 
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Not able to get",
    });
  }
};


export const addMessage = async(req, res) =>{

    try {
       const message  = req.body ;
       await Message.create(message);
       await Conversation.findByIdAndUpdate(message.conversationId ,{message: message.text} );
       
       
       return res.status(200).json({
        success: true,
        message: "Message saved successfully " 
       })


    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Not able to saved"
      })
    }

}



export const getMessage = async ( req, res) => {
  try {
    const messages = await Message.find({conversationId:req.params.id});
    return res.status(200).json(messages);

  } catch (error) {
    return res.status(500).json(error.message);
  }
}





