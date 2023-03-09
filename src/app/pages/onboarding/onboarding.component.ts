import { Component, OnInit } from '@angular/core';
import { delay, interval, Observable } from 'rxjs';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { CheckCPFRequest, CheckCPFResponse } from 'src/app/shared/features/cooperator/check-cpf';
import { AlertType, ErrorMessage } from 'src/app/shared/services/message-model';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { OnBoardingService } from 'src/app/shared/services/onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  public cooperator$: Observable<CheckCPFResponse[]>;
  showCPFButton = false;
  showTipContainer = false;

  openMenu = false;

  menuElements = [
    {label: 'Onboarding', link: ''},
    {label: 'Pesquisa', link: ''},
    {label: 'Favoritos', link: ''},
    {label: 'Chat', link: ''},
    {label: 'Filtro', link: ''},
    {label: 'Comunidade', link: ''},
  ]
  constructor(private _messagesService: MessagesService, private _onBoardingService: OnBoardingService) { }

  ngOnInit(): void {
  }



  inputCPFChanged(text: any) {
    this.showCPFButton = text ? true : false;
  }

  checkCPF(inputCPF: InputComponent) {
    const cpf: CheckCPFRequest = { CPF: inputCPF.value };

    this.cooperator$ =  this._onBoardingService.verifyCPF(cpf);
    // const list: ErrorMessage = { message: "Não foi possivel encontrar o usuário", alertType: AlertType.error }
    // this._messagesService.showErrrors(list)
  }

}
