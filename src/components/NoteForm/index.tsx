import React, { useState } from "react";
import { addNote } from "@/redux/reducers/notes";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: uuidv4(),
        title,
        content,
      }),
    );
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
