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
    this.http.get<any[]>('http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/listar_alunos.php') // Corrija o caminho para a API
      .subscribe(data => {
        this.alunos = data;
      });
  }
}
