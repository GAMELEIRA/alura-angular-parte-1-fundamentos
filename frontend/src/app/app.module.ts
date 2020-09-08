import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FotosModule } from './fotos/fotos.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsComponent } from './errors/errors.component';
import {ErrorsModule} from './errors/errors.module'

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,

  ],
  imports: [
    BrowserModule,
    FotosModule,
    AppRoutingModule,
    ErrorsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
