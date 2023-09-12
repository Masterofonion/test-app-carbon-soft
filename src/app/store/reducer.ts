import { createReducer, on } from '@ngrx/store';
import { INote } from '../model/note.interface';
import * as NotesActions from './actions';
import { INotesState } from '../model/notesState.interface';

export const initialState: INotesState = {
  notes: [],
  openedNote: null,
};

export const notesReducer = createReducer(
  initialState,
  on(NotesActions.getNotes),
  on(NotesActions.getNotesSuccess, (state, { notes }) => ({
    ...state,
    notes: notes,
  })),

  on(NotesActions.addNote, (state, newNote) => ({
    ...state,
    notes: [...state.notes, { ...newNote, id: state.notes.length + 1 }],
  })),
  on(NotesActions.openNote, (state, { id }) => ({
    ...state,
    openedNote: state.notes.find((item) => item.id === id),
  }))
);
