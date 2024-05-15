import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroDisciplinaComponent } from './_components/cad-disciplina/cad-disciplina.component';
import { ListaDisciplinaComponent } from './_components/listar-disciplina/listar-disciplina.component';
import { NavbarComponent } from './_components/pages/navbar/navbar.component';
import { FooterComponent } from './_components/pages/footer/footer.component';
import { HomeComponent } from './_components/pages/_home/home.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CadUsuarioComponent } from './_components/cad-usuario/cad-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroDisciplinaComponent,
    ListaDisciplinaComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BaseUiComponent,
    CadUsuarioComponent,

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
