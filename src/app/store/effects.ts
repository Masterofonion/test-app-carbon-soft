import { Store } from '@ngrx/store';
import { IAppState } from '../model/appState.interface';
import { DataService } from '../services/data.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getNotes, getNotesSuccess } from './actions';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class NotesEffects {
  constructor(private actions$: Actions, private data: DataService) {}
  loadNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNotes),
      switchMap(() =>
        this.data.getNotes().pipe(map((notes) => getNotesSuccess({ notes })))
      )
    )
  );
}
