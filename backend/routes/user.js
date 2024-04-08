import express from "express" ;
import { addMessage, addUser, getConversation, getMessage, getUsers, newConversation } from "../controllers/alloperations.js";


const router = express.Router();


router.post("/addUser",addUser);
router.get("/getUsers",getUsers);
router.post('/conversation/add' , newConversation);
router.post('/conversation/taken' , getConversation);

router.post('/message/add' ,addMessage);

router.get('/message/get/:id' ,getMessage);



export default router;