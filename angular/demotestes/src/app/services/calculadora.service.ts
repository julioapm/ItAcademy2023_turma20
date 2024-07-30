import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  somar(x: number, y: number) {
    return x + y;
  }

  somarAsyncObservable(x: number, y: number) {
    return of(x + y);
  }

  async somarAsyncPromise(x: number, y: number) {
    return x + y;
  }
}
