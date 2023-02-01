export enum AlertType{
    error = "error",
    sucess = "sucess",
  }
  
  export class ErrrorMessage{
    alertType: AlertType;
    message: string;
  } 