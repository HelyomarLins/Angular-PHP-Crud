import { Component, ElementRef } from '@angular/core';
import { AutenticLoginService } from '../../../autentic-login.service';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import $ from 'jquery';

// Declaração da variável global bootstrap para acessar os recursos do Bootstrap
declare var bootstrap: any;

// Define o componente HomeComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private elementRef: ElementRef, private authService: AutenticLoginService, private router: Router) {}

  // Método para abrir o modal
  openModal(): void {
    const modalElement = this.elementRef.nativeElement.querySelector('#staticBackdrop1');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.error('Modal element not found.');
    }
  }

  // LÓGICA DO LOGIN DE ACESSO
  submitLogin(email: string, senha: string): void {
    console.log('iniciando submitLogin()');

    this.authService.login(email, senha)
      .pipe(
        catchError(error => {
          // Trata erros HTTP aqui
          console.error('Erro HTTP:', error);
          this.mensagemErro = 'Erro no servidor. Tente novamente mais tarde.';
          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Resposta da api', response);
          if (response && response.message === 'Login successful') {
            console.log('login bele');
            alert('Login bem-sucedido');

            // 1. Feche o modal:
            const modalElement = this.elementRef.nativeElement.querySelector('#staticBackdrop1');
           

            // 3. Redirecione para a área logada:
            this.router.navigate(['/listar-disciplinas']);
          } else {
            // Lidar com outros tipos de resposta, se houver
            console.error('Erro no login:', response);
            this.mensagemErro = 'Erro no login: ' + response.message;
          }
        },
        error: (error) => {
          // Erro no login
          console.log('erro na requisicao', error);
          console.error('Erro no login:', error);
          this.mensagemErro = 'Erro no login. Verifique suas credenciais.';
        }
      });
  }
}
