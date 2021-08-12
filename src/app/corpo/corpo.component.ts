import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  public cliente: Cliente;

  constructor(private nav: Router) {
    this.cliente = new Cliente();

    this.cliente.id = 9876;
    this.cliente.nome = "Pedro";
    this.cliente.email = "pedro@pedro.com";
    this.cliente.endereco = "Rua das lagrimas";

    console.log(this.cliente);
   }

  ngOnInit(): void {
  }

  navegar(){
    this.nav.navigate(["/sobre"])
  }

  alterar(){
    this.cliente.nome = "Mota, Pedro";
  }

}
