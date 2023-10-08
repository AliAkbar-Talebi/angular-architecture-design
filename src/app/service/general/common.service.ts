import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() { }
  showSnackBar(data:Snackbar) {

  }

  hideProgressBar() {

  }
  showProgressBar(){
    
  }
}

export class Snackbar {
  time!: number;
  title!: string;
  description!: string;
  type!: SnackbarTypeEnum;
}
export enum SnackbarTypeEnum {
  success = 1,
  warning = 2,
  danger = 3
}