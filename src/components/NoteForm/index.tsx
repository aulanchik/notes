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
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg p-4 mb-4 gap-4"
    >
      <p className="text-3xl font-bold text-center">Note List</p>
      <input
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-200"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition duration-200"
        rows={4}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition duration-200"
      >
        {currentNote ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
};

export default NoteForm;
