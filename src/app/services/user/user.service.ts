import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/';


  constructor(private http: HttpClient) {}

  novoUsuario(body: UserModel): Observable<any> {
    return this.http.post(`${this.url}cadastro`, body).pipe(
      (res) => res,
      (error) => error
    );
  }
  autenticarUsuario(): Observable <any> {
    return this.http.get(`${this.url}cadastro`).pipe(
      (res) => res,
      (error) => error
    );
  }
  editarUsuario(id: number, dadosAtualizados: any): Observable <any> {
    return this.http.put(`${this.url}cadastro/${id}`, dadosAtualizados).pipe(
      (res) => res,
      (error) => error
    );
  }
  excluirUsuario(id:any): Observable <any> {
    return this.http.delete(`${this.url}cadastro/${id}`,).pipe(
      (res) => res,
      (error) => error
    );
  }
}
