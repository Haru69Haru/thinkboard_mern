import express from "express"
import { getNoteByID, createNotes, getAllNotes, updateNotes, deleteNote} from "../controllers/noteController.js"
const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteByID);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNote);


export default router;