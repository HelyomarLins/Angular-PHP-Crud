import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AutenticUserService {

  constructor(private http: HttpClient) { }

  registrarUsuario(nome_usu: string, email_usu: string, pass_usu: string): Observable<any> {
    const url = 'http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/cad.usuario.php';
    const body = { nome_usu, email_usu, pass_usu };

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

    // ou throwError(error); para propagar o erro para a camada superio
    return throwError(error);
  }
}
