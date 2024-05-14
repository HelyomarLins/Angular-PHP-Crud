import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDisciplinaComponent } from './_components/cad-disciplina/cad-disciplina.component';
import { ListaDisciplinaComponent } from './_components/listar-disciplina/listar-disciplina.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroDisciplinaComponent,
    ListaDisciplinaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
