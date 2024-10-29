import { Note } from "@/types";

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export default initialState;
