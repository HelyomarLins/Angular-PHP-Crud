import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  login() {
    // Substitua isso pela sua lógica de login
    // ...

    // Se o login for bem-sucedido:
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }
}
