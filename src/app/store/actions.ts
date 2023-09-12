import { createAction, props } from '@ngrx/store';
import { INote } from '../model/note.interface';

export const getNotes = createAction('[Notes] Get Notes');
export const getNotesSuccess = createAction(
  '[Notes] Get Notes Success',
  props<{ notes: INote[] }>()
);

export const addNote = createAction('[Notes] Add Note', props<INote>());

export const openNote = createAction(
  '[Notes] Open Note',
  props<{ id: number }>()
);
