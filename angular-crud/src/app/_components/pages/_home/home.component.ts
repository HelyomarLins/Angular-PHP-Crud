import { Component, ElementRef } from '@angular/core';
import { AutenticLoginService } from '../../../autentic-login.service';

// Declaração da variável global bootstrap para acessar os recursos do Bootstrap
declare var bootstrap: any;

// Define o componente HomeComponent
@Component({
  selector: 'app-home', // Seletor do componente
  templateUrl: './home.component.html', // Arquivo HTML associado ao componente
  styleUrls: ['./home.component.scss'] // Arquivos de estilo associados ao componente
})
export class HomeComponent {

  email: string = ''; 
  senha: string = '';
  constructor(private elementRef: ElementRef, private authService: AutenticLoginService) {} // Injeta ElementRef para acessar o elemento do DOM

  // Método para abrir o modal
  openModal(): void {
    // Encontra o elemento do modal com o ID 'staticBackdrop1' no DOM
    const modalElement = this.elementRef.nativeElement.querySelector('#staticBackdrop1');
    if (modalElement) { // Verifica se o elemento do modal foi encontrado
      // Cria uma instância do modal e exibe-o
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.error('Modal element not found.'); // Exibe um erro se o elemento do modal não for encontrado
    }
  }

  // LÓGICA DO LOGIN DE ACESSO
  submitLogin(email: string, senha: string): void {

    // Chame o método de login do serviço de autenticação
    this.authService.login(email, senha).subscribe(
      (response) => {

        // Sucesso: faça algo com a resposta do backend, como redirecionar para outra página ou exibir uma mensagem de sucesso
      },
      (error) => {

        // Erro: faça algo com o erro, como exibir uma mensagem de erro para o usuário
      }
    );
  }
}
