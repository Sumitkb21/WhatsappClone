import { Users } from "../models/userSchema.js";

export const addUser = async (req, res) => {
  try {
    const { iss,nbf,aud,sub,email,email_verified,azp,name,picture,given_name,family_name,iat,exp,jti} = req.body;
    console.log("here I AM ");
    let exist  = await Users.findOne({sub});
    if(exist){
        return res.status(400).json({
            success: false,
            message: "User Already exist"
        })
    }

    const newuser = await Users.create(req.body);
    if(newuser){
        res.status(200).json({
            success:true,
            message: "User Created Successfully", 
        })
    }

  } catch (error) {
   return res.status(400).json({
    success:false, 
    message : "Not able to create", 
   })

  }
};


export const getUsers = async (req, res) => {
  try {
    
    const  users  = await Users.find();
        
    
      res.status(200).json({
            success:true,
            message: "Sent all Users Successfully", 
            users
        })

  } catch (error) {
   return res.status(400).json({
    success:false, 
    message : "Not able to send the all data from backend", 
   })

  }
};






