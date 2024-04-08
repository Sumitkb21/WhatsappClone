import axios from "axios"

let url="http://localhost:5000/api/v1/wa";



export const addUser  = async(data) =>{
    try {
      await axios.post(`${url}/addUser`, data);
        
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error(
              "Server responded with error status:",
              error.response.status
            );
            console.error("Response data:", error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from server:", error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.error("Error setting up request:", error.message);
          }

        }
}



export const getUsers = async ()=>{

    try {
        let response =  await axios.get(`${url}/getUsers`);
        console.log(response);
        return response.data.users;  
    
    } catch (error) {
       console.log("Error while calling getUser API " , error.message); 
    }
}  




export const setConversation = async(data)=>{

    try {
        let response  = await axios.post(`${url}/conversation/add` , data);
        console.log(response.data.message);
    } catch (error) {
        console.log("Error while callign setConversation api ", error.message);
    }

} 




export const getConversation = async(data)=>{

    try {
        // console.log("datadda", data);

        let response  = await axios.post(`${url}/conversation/taken`,data);
        // console.log("this is conersation" , response);
        return  response.data.convo ;
        
    } catch (error) {
        console.log("Error while callign getConversation api ", error.message);
    }

} 



export const newMessage = async(data)=>{

  try {
      // console.log("datadda", data);

      let response  = await axios.post(`${url}/message/add`,data);
      // console.log("this is conersation" , response);
      return  response.data ;
      
  } catch (error) {
      console.log("Error while callign newMessage api ", error.message);
  }

}



export const getMessages = async(id)=>{

  try {

      let response  = await axios.get(`${url}/message/get/${id}`);
      return  response.data ;
      
  } catch (error) {
      console.log("Error while callign newMessage api ", error.message);
  }

}