import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ErrrorMessage } from '../../services/message-model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  showMessages = false;
  errors$: Observable<ErrrorMessage[]>;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
    this.errors$ = this.messagesService.errors$
      .pipe(
        tap(() => this.showMessages = true)
      );
  }

}

