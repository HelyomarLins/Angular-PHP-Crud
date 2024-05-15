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

    return this.http.post(url, body, httpOptions);
  }
}
