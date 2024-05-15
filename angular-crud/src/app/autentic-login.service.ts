import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticLoginService {

  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    const url = 'http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/login.usuario.php';
    const body = { email, senha };

    // Define os headers para indicar que estamos enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Faz a requisição POST para a API e retorna um Observable
    return this.http.post<any>(url, body, httpOptions);
  }

  // Método para salvar as informações do usuário após o login
  salvarUsuario(usuario: any): void {
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  // Método para obter as informações do usuário logado
  getUsuarioLogado(): any {
    // Obtém as informações do usuário do localStorage
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      return JSON.parse(usuario);
    } else {
      return null;
    }
  }
}
