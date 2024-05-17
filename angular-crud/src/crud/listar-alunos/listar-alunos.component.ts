import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/listar_alunos.php')
      .subscribe((data: any) => {

        // Acessa o array 'alunos' dentro do objeto 'data'
        this.alunos = data.alunos;
        console.log(this.alunos);
      });
  }
}
