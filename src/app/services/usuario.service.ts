import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = 'https://6729633e6d5fa4901b6cfc1d.mockapi.io/usuario';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> 
  {
    return this.http.get(this.apiUrl);
  }

  getUsuario(email: string, senha: string): Observable<any> 
  {
    return this.http.get(`${this.apiUrl}?email=${email}&senha=${senha}`);
  }
}
