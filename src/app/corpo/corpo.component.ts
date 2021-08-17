import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  //cliente: Cliente;
  //lista: Cliente[] = []; //inicializa a lista vazia
  listaUsuario: Usuario[] = [];

  constructor(private nav: Router, private service: UsuarioService) {

  }

  ngOnInit(): void{
    this.service.recuperarUsuarios().subscribe(
      (res: Usuario[]) => {
        this.listaUsuario = res;
        console.log(this.listaUsuario);
      },
      (err) => {
        alert(err);
      }
    );
  }

  navegar(){
    this.nav.navigate(["/sobre"])
  }

 /* alterar(){
    this.cliente.nome = "Mota, Pedro";
  }*/

}
