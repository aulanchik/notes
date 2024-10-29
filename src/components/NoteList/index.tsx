import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "@/redux/reducers/notes";
import { RootState } from "@/redux/store";

const NoteList: React.FC = () => {
  const notesList = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDeleteNote = (noteId: string) => {
    dispatch(deleteNote(noteId));
  };

  return (
    <div>
      {notesList.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
