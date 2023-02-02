import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { AlertType, ErrrorMessage } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private subject = new BehaviorSubject<ErrrorMessage[]>([]);
  alertType: AlertType = AlertType.sucess;

  errors$: Observable<ErrrorMessage[]> = this.subject.asObservable()
    .pipe(
      filter((messages )=> messages && messages.length > 0),
      tap(console.log)
    );
    
  constructor() { }

  showErrrors(...errors: ErrrorMessage[]) {
    this.subject.next(errors);
  }
}


