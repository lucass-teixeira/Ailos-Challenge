import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CheckCPFRequest, CheckCPFResponse } from '../features/cooperator/check-cpf';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { MessagesService } from './messages.service';
import { AlertType, ErrorMessage } from './message-model';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingService {

  private _apiURL = environment.apiURL;
  constructor(private _http: HttpClient, private _messageService: MessagesService) { }

  verifyCPF(request: CheckCPFRequest): Observable<CheckCPFResponse[]> {
    const opts = { params: new HttpParams({fromString: `CPF=${request.CPF}`}) };
    const response = this._http.get<CheckCPFResponse[]>(this._apiURL + "cooperator/",opts).pipe(
      tap((payload: CheckCPFResponse[]) =>{
        if(payload.length === 0)
        {
          const errorMessage: ErrorMessage = {message: 'O CPF do colaborador não foi encontrado', alertType: AlertType.error}
          this._messageService.showErrrors(errorMessage);
        }
      }),
      catchError(error =>{
        const errorMessage: ErrorMessage = {message: 'Houve um erro no servidor, verifque se o servidor esta rodando na porta 3000.', alertType: AlertType.error}
        this._messageService.showErrrors(errorMessage)
        return of([]);
      })
    );

    return response;
  }
}
