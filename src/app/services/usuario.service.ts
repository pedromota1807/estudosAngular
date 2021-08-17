import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public recuperarUsuarios(){
    return this.http.get("http://localhost:8080/usuario");
  }
}
