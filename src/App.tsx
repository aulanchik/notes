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
    <main>
      <NoteForm
        onSave={handleSave}
        onEditCancel={handleEditCancel}
        currentNote={currentNote}
      />
      <NoteList onEdit={handleEdit} onEditCancel={handleEditCancel} />
    </main>
  );
};

export default App;
