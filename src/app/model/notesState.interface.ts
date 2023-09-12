import { INote } from './note.interface';

export interface INotesState {
  notes: INote[];
  openedNote: INote | null;
}
