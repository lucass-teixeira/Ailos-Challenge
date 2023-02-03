export class CheckCPFRequest {
    CPF: string;
}

export class CheckCPFResponse{
        id: string;
        name: string ;
        CPF: 229038921;
        situation: situation;
        age: 21;
        applicationaccount: {
          numberaccount: number;
        }
        checkingaccount: {
          numberaccount: number;
        }
}

enum situation{
    regular = 'regular',
    irregular = 'irregular'
}