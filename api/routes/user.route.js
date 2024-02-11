import express from "express";
import { test , updateUser, deleteUser, signout} from "../controllers/user.controller.js";
import { verifytoken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId',verifytoken, updateUser);
router.delete('/delete/:userId', verifytoken, deleteUser);
router.post('/signout', signout);


export default router;