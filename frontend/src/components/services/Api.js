import axios from "axios"

let url="http://localhost:10000/api/v1/wa";



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