import React, { useState } from "react";
import { NoteForm, NoteList } from "@/components";
import { Note } from "@/types";

const App: React.FC = (): JSX.Element => {
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);

  const handleEdit = (note: Note) => {
    setCurrentNote(note);
  };

  const handleSave = () => {
    setCurrentNote(undefined);
  };

  const handleEditCancel = () => {
    setCurrentNote(undefined);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
        <NoteForm
          onSave={handleSave}
          onEditCancel={handleEditCancel}
          currentNote={currentNote}
        />
        <NoteList onEdit={handleEdit} onEditCancel={handleEditCancel} />
      </div>
    </main>
  );
};

export default App;
