import Note from "../model/Note.js";

export const getAllnotes = async (req, res) => {
  try {
    const allNotes = await Note.find().sort({createdAt:-1});
    res.status(200).json(allNotes);
  } catch (error) {
    console.log("Error in getAllnotes", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNote = async (req, res) => {
  // You can use req.body if needed, but currently not used
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    console.log("new notes created successfully");
    res.status(201).json({ message: "new notes created successfully" });
  } catch (error) {
    console.log("Error in createNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res
      .status(200)
      .json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.log("Error in updateNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("Error in deleteNote", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
