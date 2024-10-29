import React from "react";
import { NoteForm, NoteList } from "@/components";

const App: React.FC = (): JSX.Element => (
  <div>
    <NoteForm />
    <NoteList />
  </div>
);

export default App;
