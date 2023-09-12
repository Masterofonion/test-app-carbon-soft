import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';
import { Subject } from 'rxjs';
import { INote } from '../model/note.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentRef: ComponentRef<ModalComponent>;
  private componentSubscriber!: Subject<INote>;

  constructor(private resolver: ComponentFactoryResolver) {}
  openModal(
    container: ViewContainerRef,
    title: string = '',
    content: string = ''
  ) {
    let factory = this.resolver.resolveComponentFactory(ModalComponent);
    this.componentRef = container.createComponent(factory);
    console.log(this.componentRef);
    this.componentRef.instance.title = title;
    this.componentRef.instance.content = content;
    this.componentRef.instance.closeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.submitEvent.subscribe((note: INote) =>
      this.submit(note)
    );
    this.componentSubscriber = new Subject<INote>();
    return this.componentSubscriber.asObservable();
  }
  submit(note: INote) {
    this.componentSubscriber.next(note);
    this.closeModal();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }
}
