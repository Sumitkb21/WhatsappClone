import express from "express" ;
import { addUser, getUsers } from "../controllers/alloperations.js";

const router = express.Router();


router.post("/addUser",addUser);
router.get("/getUsers",getUsers);


export default router;