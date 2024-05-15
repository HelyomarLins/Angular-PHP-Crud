import { Component, ElementRef } from '@angular/core';
import { AutenticUserService } from '../../../autentic-user.service';
import { AutenticLoginService } from '../../../autentic-login.service';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

// Declaração da variável global bootstrap para acessar os recursos do Bootstrap
declare var bootstrap: any;

type CampoValido = 'nome_usu' | 'email_usu' | 'pass_usu';

interface Mensagens {
  nome_usu: string;
  email_usu: string;
  pass_usu: string;
}

// Define o componente HomeComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nome_usu: string = '';
  email_usu: string = '';
  pass_usu: string = '';
  mensagemErro: string = '';
  email: string = '';
  senha: string = '';

  constructor(private elementRef: ElementRef,
    private authService: AutenticLoginService,
    private userService: AutenticUserService,
    private router: Router) {}

  // Método para abrir o modal
  openModal(modalId: string): void {
    const modalElement = this.elementRef.nativeElement.querySelector(`#${modalId}`);
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.error('Modal element not found.');
    }
  }

  // SUBMIT USUARIO
  submitUsuario(): void {
    console.log('Iniciando submitUsiario()');

    // Array com os nomes dos campos
    const campos = ['nome_usu', 'email_usu', 'pass_usu'];

    // Objeto com as mensagens de preenchimento para cada campo
    const mensagens = {
      nome_usu: 'Preencha o campo nome.',
      email_usu: 'Preencha o campo email.',
      pass_usu: 'Preencha o campo senha.'
    };

    // Verifica se algum campo está vazio
    let algumCampoVazio = false;
    for (const campo of campos) {
      if(!this[campo as CampoValido]) {
        const mensagem = mensagens[campo as keyof Mensagens];
        alert(mensagem);
        algumCampoVazio = true;
        break; // Para o loop se um campo estiver vazio
      }
    }

    // Se nenhum campo estiver vazio, continue com o envio do formulário
    if (!algumCampoVazio) {
      // Envia os dados para o backend
      this.userService.registrarUsuario(this.nome_usu, this.email_usu, this.pass_usu)
        .pipe(
          catchError(error => {
            console.error('Erro HTTP:', error);
            this.mensagemErro = 'Erro ao cadastrar usuário. Tente novamente mais tarde.';
            return of(null);
          })
        )
        .subscribe(response => {
          if (response && response.status === 'success') {
            console.log('Usuário cadastrado com sucesso');
            alert('Usuário cadastrado com sucesso');
            // Limpa os campos após o cadastro
            this.nome_usu = '';
            this.email_usu = '';
            this.pass_usu = '';
            // Fechar o modal de cadastro após o cadastro bem-sucedido (opcional)
            this.fecharModal('modalCadastro');
          } else {
            console.error('Erro ao cadastrar usuário:', response);
            this.mensagemErro = response ? response.message : 'Erro desconhecido ao cadastrar usuário.';
          }
        });
    }
  }

  // LÓGICA DO LOGIN DE ACESSO
  submitLogin(): void {
    // O código do submitLogin() permanece o mesmo
    // Implemente aqui se desejar alguma ação específica ao enviar o formulário de login
  }

  // Método para fechar o modal
  fecharModal(modalId: string): void {
    const modalElement = this.elementRef.nativeElement.querySelector(`#${modalId}`);
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.hide();
    }
  }
}
