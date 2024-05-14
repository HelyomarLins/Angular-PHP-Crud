import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-disciplina',
  templateUrl: './listar-disciplina.component.html',
  styleUrls: ['./listar-disciplina.component.scss']
})
export class ListaDisciplinaComponent implements OnInit {
  disciplinas: any[] = []; // Array para armazenar as disciplinas obtidas do servidor

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Método executado quando o componente é inicializado
    this.listarDisciplinas(); // Chama a função para listar as disciplinas
  }

  listarDisciplinas() {
    // Função para obter a lista de disciplinas do servidor
    console.log('Fazendo solicitação HTTP para obter lista de disciplinas...');
    this.http.get<any>('http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/listar_disciplina.php')
      .subscribe(
        (response) => {
          // Callback para tratamento da resposta bem-sucedida
          console.log('Resposta do servidor:', response); // Exibe a resposta do servidor no console
          if (response.status === 'success') {
            this.disciplinas = response.disciplinas; // Preenche a variável disciplinas com os dados obtidos do servidor
            console.log('Disciplinas obtidas com sucesso:', this.disciplinas); // Exibe as disciplinas no console
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
