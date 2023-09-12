import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { INote } from 'src/app/model/note.interface';
import { openedNoteSelector } from 'src/app/store/selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { openNote } from 'src/app/store/actions';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  note$: Observable<INote> = this.store.pipe(select(openedNoteSelector));

  constructor(private store: Store, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (params.hasOwnProperty('id')) {
        this.store.dispatch(openNote({ id: Number(params['id']) }));
      }
    });
  }

  ngOnInit(): void {}
  ngAfterViewChecked() {}
}
