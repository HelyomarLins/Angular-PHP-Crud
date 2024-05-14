import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticLoginService {

  constructor(private http: HttpClient) { }

  // Método para enviar as credenciais de login para o backend
  login(email: string, senha: string): Observable<any> {

    // Substitua 'url_do_seu_backend' pela URL do seu endpoint de login no backend
    const url = 'http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/login.usuario.php';

    // O corpo da requisição pode variar dependendo da sua API
    const body = { email, senha };
    return this.http.post(url, body);
  }
}
