export const getAllnotes = (req, res) => {
  res.status(200).json({ message: "this is from get request " });
};

export const createNotes = (req, res) => {
  res
    .status(200)
    .json({ message: "creating the notes successfully with POST request " });
};
export const updateNotes = (req, res) => {
  res
    .status(201)
    .json({ message: "updating the notes successfully with PUT request " });
};
