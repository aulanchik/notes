import React, { useState, useEffect } from "react";
import { addNote, updateNote } from "@/redux/reducers/notes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import { Note } from "@/types";

interface NoteFormProps {
  currentNote?: Note;
  onSave: () => void;
  onEditCancel: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({
  currentNote,
  onEditCancel,
  onSave,
}): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const notes = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentNote && notes.find((note) => note.id === currentNote.id)) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle("");
      setContent("");
      onEditCancel();
    }
  }, [currentNote, notes, onEditCancel]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentNote) {
      dispatch(
        updateNote({
          ...currentNote,
          title,
          content,
        }),
      );
    } else {
      dispatch(
        addNote({
          id: uuidv4(),
          title,
          content,
        }),
      );
    }
    setTitle("");
    setContent("");
    onSave();
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
      <button type="submit">{currentNote ? "Update Note" : "Add Note"}</button>
    </form>
  );
};

export default NoteForm;
