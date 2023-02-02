import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ErrrorMessage } from '../../services/message-model';
import { MessagesService } from '../../services/messages.service';

// import { faCoffee  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnChanges {

  showMessages = true;
  errors$: Observable<ErrrorMessage[]>;

  constructor(public messagesService: MessagesService) {
  }

  ngOnChanges(){
    
  }
  ngOnInit(): void {
    this.errors$ = this.messagesService.errors$
      .pipe(
        tap(() => this.showMessages = true)
      );
  }

  closeMessage(){
    this.showMessages = false;
  }

}

