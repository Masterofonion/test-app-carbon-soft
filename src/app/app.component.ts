import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { INote } from './model/note.interface';
import { notesSelector, openedNoteSelector } from './store/selectors';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { addNote, getNotes, openNote } from './store/actions';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  openedNote$: Observable<INote> = this.store.pipe(select(openedNoteSelector));
  notes$: Observable<INote[]> = this.store.pipe(select(notesSelector));
  @ViewChild('modalContainer', { read: ViewContainerRef })
  container: ViewContainerRef;
  modalSub: Subscription;
  constructor(
    private store: Store,
    private router: Router,
    private modalService: ModalService
  ) {
    this.store.dispatch(getNotes());
  }
  ngOnInit() {}
  openNote(noteId: number) {
    this.router.navigateByUrl(`${noteId}`);
  }
  addNote() {
    this.modalSub = this.modalService
      .openModal(this.container)
      .subscribe((note) => {
        console.log(note);
        this.store.dispatch(addNote(note));
      });
  }

  ngOnDestroy() {
    if (this.modalSub) this.modalSub.unsubscribe();
  }
}
