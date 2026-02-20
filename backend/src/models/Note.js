import mongoose from "mongoose";

// 1st step: You need to create a Schema
// 2nd step: you would create a model based off that schema


const noteSchema = mongoose.Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true}
    },
    {timestamps: true}
);

const Note = mongoose.model("Note", noteSchema);
export default Note;