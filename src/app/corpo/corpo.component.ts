import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }

  navegar(){
    this.nav.navigate(["/sobre"])
  }

}
