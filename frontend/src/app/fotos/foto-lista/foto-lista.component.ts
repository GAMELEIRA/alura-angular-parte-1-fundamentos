import { Foto } from './../foto/foto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Foto[] = [];

  filter: string = "";
  
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.fotos = this.activatedRoute.snapshot.data.fotos;

  }

}
