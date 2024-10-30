import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "@/redux/reducers/notes";
import { RootState } from "@/redux/store";
import { Note } from "@/types";

interface NoteListProps {
  onEdit: (note: Note) => void;
  onEditCancel: () => void;
}

const NoteList: React.FC<NoteListProps> = ({
  onEdit,
  onEditCancel,
}): JSX.Element => {
  const notesList = useSelector((state: RootState) => state.notes.notes);
  const dispatch = useDispatch();

  const handleDelete = (noteId: string) => {
    dispatch(deleteNote(noteId));
    onEditCancel();
  };

  if (notesList.length === 0) return <p>No notes available.</p>;

  return (
    <div>
      {notesList.map((note) => (
        <div key={note.id}>
          <p>{note.title}</p>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
