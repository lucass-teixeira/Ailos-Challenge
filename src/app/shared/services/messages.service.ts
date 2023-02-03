import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { AlertType, ErrorMessage } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private subject = new BehaviorSubject<ErrorMessage[]>([]);
  alertType: AlertType = AlertType.sucess;

  errors$: Observable<ErrorMessage[]> = this.subject.asObservable()
    .pipe(
      filter((messages )=> messages && messages.length > 0),
      tap(console.log)
    );
    
  constructor() { }

  showErrrors(...errors: ErrorMessage[]) {
    this.subject.next(errors);
  }
}


