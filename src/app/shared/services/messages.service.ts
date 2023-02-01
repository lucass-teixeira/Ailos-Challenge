import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { AlertType, ErrrorMessage } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private subject = new BehaviorSubject<ErrrorMessage[]>([]);
  alertType: AlertType = AlertType.sucess;

  errors$: Observable<ErrrorMessage[]> = this.subject.asObservable()
    .pipe(
      filter(messages => messages && messages.length > 0)
    );
    
  constructor() { }

  showErrrors(...errors: ErrrorMessage[]) {
    this.subject.next(errors);
  }
}


