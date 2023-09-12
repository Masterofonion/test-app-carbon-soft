import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INote } from 'src/app/model/note.interface';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent {
  @Input() notes: INote[];
  @Input() openedNote: INote;
  @Output() addNote = new EventEmitter<void>();
}
