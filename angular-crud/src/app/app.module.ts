import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/pages/navbar/navbar.component';
import { FooterComponent } from './_components/pages/footer/footer.component';
import { HomeComponent } from './_components/pages/_home/home.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { CrudModule } from './crud/crud.module'; // Corrigido o caminho da importação

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BaseUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CrudModule // Importe o módulo CrudModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }