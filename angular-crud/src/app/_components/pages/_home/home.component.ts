import { Component, ElementRef } from '@angular/core';
import { AutenticLoginService } from '../../../autentic-login.service';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import $ from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

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
  submitLogin(): void {
    console.log('Iniciando submitLogin()');

    // Verifica se os campos de e-mail e senha estão preenchidos
    if (!this.email || !this.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos.';
      return;
    }

    this.authService.login(this.email, this.senha)
      .pipe(
        catchError(error => {
          // Trata erros HTTP aqui
          console.error('Erro HTTP:', error);

          if (error instanceof HttpErrorResponse) {
            if (error.status === 400) {
              this.mensagemErro = 'Dados de login inválidos. Verifique suas credenciais.';
            } else if (error.status === 401) {
              this.mensagemErro = 'Usuário ou senha incorretos.';
            } else {
              this.mensagemErro = 'Erro no servidor. Tente novamente mais tarde.';
            }
          } else {
            this.mensagemErro = 'Erro desconhecido. Tente novamente mais tarde.';
          }

          return of(null);
        })
      )
      .subscribe({
        next: (response) => {
          console.log('Resposta da API:', response);
          if (response && response.message === 'Login successful') {
            console.log('Login bem-sucedido');
            alert('Login bem-sucedido');
            // Redireciona para a área logada:
            this.router.navigate(['/listar-disciplinas']);
          } else {
            console.error('Erro no login:', response);
            this.mensagemErro = 'Erro no login: ' + (response ? response.message : 'Resposta nula do servidor.');
          }
        },
        error: (error) => {
          // Erro no login
          console.log('Erro na requisição:', error);
          this.mensagemErro = 'Erro no login. Verifique suas credenciais.';
        }
      });
  }
}

