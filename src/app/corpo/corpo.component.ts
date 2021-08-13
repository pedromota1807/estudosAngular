import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  cliente: Cliente;
  lista: Cliente[] = []; //inicializa a lista vazia

  constructor(private nav: Router) {
    
    this.cliente = new Cliente(9876, "Pedro", "pedro@pedro.com", "Rua das Lagrimas", true);
    let i: number;
    for(i=0; i<10; i++){
      this.lista.push(new Cliente(i, "cli"+i, "End"+i, "email"+i, true));
    }
    
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
