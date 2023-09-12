import { Injectable } from '@angular/core';
import { INote } from '../model/note.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  initialNotes: INote[] = [
    {
      id: 1,
      title: 'Заметка 1',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, nam numquam error doloremque, earum fugiat libero quos qui laborum minus ea animi perferendis iste, quas maxime corporis. Nihil, ipsum.',
    },
    {
      id: 2,
      title: 'Заметка 2',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, nam numquam error doloremque, earum fugiat libero quos qui laborum minus ea animi perferendis iste, quas maxime corporis. Nihil, ipsum.',
    },
    {
      id: 3,
      title: 'Заметка 3',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, nam numquam error doloremque, earum fugiat libero quos qui laborum minus ea animi perferendis iste, quas maxime corporis. Nihil, ipsum.',
    },
    {
      id: 4,
      title: 'Заметка 4',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, nam numquam error doloremque, earum fugiat libero quos qui laborum minus ea animi perferendis iste, quas maxime corporis. Nihil, ipsum.',
    },
    {
      id: 5,
      title: 'Заметка 5 с очень длинным названием',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus, nam numquam error doloremque, earum fugiat libero quos qui laborum minus ea animi perferendis iste, quas maxime corporis. Nihil, ipsum.',
    },
  ];
  getNotes() {
    return of(this.initialNotes);
  }
}
