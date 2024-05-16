import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticLoginService {
  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    console.log('Serviço de Login - Iniciado login()');
    const url = 'http://localhost/Angular-Crud/Angular-PHP-Crud/angular-crud/API/login.usuario.php';
    const body = { email, senha };
    // Define os headers para indicar que estamos enviando JSON
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<any>(url, body, httpOptions)
      .pipe(
        // Mapeia a resposta para um objeto mais fácil de usar
        map(response => {
          if (response && response.message === 'Login successful') {
            // Login bem-sucedido, retorna os dados do usuário
            return { success: true, usuario: response };
          } else {
            // Login falhou, retorna um objeto com erro
            return { success: false, error: response.message || 'Erro desconhecido ao realizar login' };
          }
        }),
        // Lida com erros HTTP
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
    // Propaga o erro para a camada superior
    return throwError(error);
  }
}
