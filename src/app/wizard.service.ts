import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WizardService {

  _open: boolean = false;

  constructor() { }
}
