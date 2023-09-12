import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INote } from 'src/app/model/note.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter<INote>();
  noteForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: [this.title, [Validators.required]],
      content: [this.content, [Validators.required]],
    });
  }
  handleClick(event: Event) {
    if (
      !(event.target as HTMLElement).closest('.modal') ||
      (event.target as HTMLElement).id === 'cancel'
    ) {
      this.closeEvent.next();
    }
    if ((event.target as HTMLElement).id === 'submit' && this.noteForm.valid) {
      this.submitEvent.next(this.noteForm.value);
    }
  }
}
