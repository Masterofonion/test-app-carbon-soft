import { createSelector } from '@ngrx/store';
import { IAppState } from '../model/appState.interface';

export const selectFeature = (state: IAppState) => state.notes;

export const openedNoteSelector = createSelector(
  selectFeature,
  (state) => state.openedNote
);
export const notesSelector = createSelector(
  selectFeature,
  (state) => state.notes
);
