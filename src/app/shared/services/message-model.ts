export enum AlertType{
    error = "error",
    sucess = "sucess",
  }
  
  export class ErrorMessage{
    alertType: AlertType;
    message: string;
  } 