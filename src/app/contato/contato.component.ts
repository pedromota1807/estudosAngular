import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public valor: string = "alguma coisa";
  constructor() { }

  ngOnInit(): void {
  }

  public restaura(): void{
    this.valor = "valor inicial"
  }
}
