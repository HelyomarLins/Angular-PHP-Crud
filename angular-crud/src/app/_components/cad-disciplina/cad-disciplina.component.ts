import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-disciplina',
  templateUrl: './cad-disciplina.component.html',
  styleUrls: ['./cad-disciplina.component.scss']
})
export class CadastroDisciplinaComponent {
  constructor(private http: HttpClient) {}

  disciplina = {
    nome_disc: '',
    sigla_disc: '',
    ch_disc: ''
  };

  cadastrar(event: Event) {
    event.preventDefault();
    this.http.post<any>('http://localhost/CRUD-Angular/CRUD_Angular/API/inserir_disciplina.php', this.disciplina)
      .subscribe(
        (response) => {
          console.log('Resposta do servidor:', response);
          if (response.status === 'success') {
            // Acessa a propriedade message do objeto response
            alert(response.message); // Exibe a mensagem de sucesso
          } else {
            alert('Erro inesperado ao cadastrar disciplina.');
          }
        },
        // ... restante do código
      );
  }
}
