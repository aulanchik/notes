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

  if (notesList.length === 0)
    return <p className="text-center text-gray-500">No notes available.</p>;

  return (
    <div className="space-y-4">
      {notesList.map((note) => (
        <div
          key={note.id}
          className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4"
        >
          <p className="text-lg font-bold">{note.title}</p>
          <p className="text-gray-700">{note.content}</p>
          <div className="mt-2 space-x-2">
            <button
              onClick={() => onEdit(note)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(note.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
