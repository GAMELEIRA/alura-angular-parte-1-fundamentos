import { Foto } from './../../foto/foto';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {

  @Input()
  fotos: Foto[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);

    console.log(changes.fotos);

    if (changes.fotos) {

      this.rows = this.groupColumns(this.fotos);

    }

  }


  groupColumns(fotos: Foto[]) {

    const newRows = [];

    for (let index = 0; index < fotos.length; index += 3) {

      newRows.push(fotos.slice(index, index + 3));

    }

    return newRows;

  }

}
