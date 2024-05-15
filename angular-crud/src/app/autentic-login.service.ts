import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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

    return this.http.post<any>(url, body, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do cliente
      console.error('Um erro ocorreu:', error.error.message);
    } else {
      // O backend retornou um erro
      console.error(
        `Backend retornou código ${error.status}, ` +
        `body foi: ${error.error}`);
    }

    // retorna um Observable com um erro para que possa ser tratado pelo subscribe
    return of(null); // ou throwError(error); para propagar o erro para a camada superior
  }
}
