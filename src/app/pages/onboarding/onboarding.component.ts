import { Component, OnInit } from '@angular/core';
import { AlertType, ErrrorMessage } from 'src/app/shared/services/message-model';
import {  MessagesService } from 'src/app/shared/services/messages.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  constructor(private _messagesService: MessagesService) { }

  ngOnInit(): void {
    const list: ErrrorMessage = {message: "Não foi possivel encontrar o usuário", alertType: AlertType.error}
    this._messagesService.showErrrors(list)
  }

}
