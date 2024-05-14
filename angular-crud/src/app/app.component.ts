import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  disciplinas: any[] = []; // Array para armazenar as disciplinas obtidas do servidor

  constructor(private http: HttpClient) {}

  listarDisciplinas() {
    // Função para obter a lista de disciplinas do servidor
    this.http.get<any>('http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/listar_disciplina.php')
      .subscribe(
        (response) => {
          // Callback para tratamento da resposta bem-sucedida
          console.log('Resposta do servidor:', response); // Exibe a resposta do servidor no console
          if (response.status === 'success') {
            this.disciplinas = response.disciplinas; // Preenche a variável disciplinas com os dados obtidos do servidor
            console.log('Disciplinas obtidas com sucesso:', this.disciplinas);
          } else {
            console.error('Erro ao obter lista de disciplinas:', response.message); // Exibe mensagem de erro no console
          }
        },
        (error) => {
          // Callback para tratamento de erro na requisição
          console.error('Erro ao obter lista de disciplinas:', error); // Exibe mensagem de erro no console
        }
      );
  }
}
