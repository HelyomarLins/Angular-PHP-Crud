import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-disciplina',
  templateUrl: './cad-disciplina.component.html',
  styleUrls: ['./cad-disciplina.component.scss']
})
export class CadastroDisciplinaComponent {
  formEnviado = false; // Corrigindo o nome da variável
  constructor(private http: HttpClient) {}

  disciplina = {
    nome_disc: '',
    sigla_disc: '',
    ch_disc: ''
  };

  cadastrar(event: Event) {
    event.preventDefault();

    // Verifica se o formulário já foi enviado
    if (this.formEnviado) {
      return; // Se já foi enviado, interrompe a execução da função
    }

    // Define formEnviado como true para indicar que o formulário foi enviado
    this.formEnviado = true;
    this.http.post<any>('http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/inserir_disciplina.php', this.disciplina)
      .subscribe(
        (response) => {
          console.log('Resposta do servidor:', response);
          if (response.status === 'success') {
            alert(response.message); // Exibe a mensagem de sucesso
            // Limpa os campos do formulário após o sucesso
            this.disciplina = {
              nome_disc: '',
              sigla_disc: '',
              ch_disc: ''
            };
          } else {
            alert('Erro inesperado ao cadastrar disciplina.');
          }
        },
        (error) => {
          alert('Erro inesperado ao cadastrar disciplina.'); // Trata erros de requisição
        },
        () => {
          //Ao finalizar a requisição, redefine submitting como false
          this.formEnviado = false;
        }
      );
  }
}
