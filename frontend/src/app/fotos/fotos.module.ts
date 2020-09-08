import { FilterByDescription } from './foto-lista/filter-by-description.pipe';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { FotoComponent } from './foto/foto.component';
import { FotoListaComponent } from './foto-lista/foto-lista.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotosComponent } from './foto-lista/fotos/fotos.component';

@NgModule({
  declarations: [FotoComponent, FotoListaComponent, FotoFormComponent, FotosComponent, FilterByDescription],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule

  ]
})
export class FotosModule { }
