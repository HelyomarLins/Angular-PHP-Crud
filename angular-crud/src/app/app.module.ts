import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/pages/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { FooterComponent } from './_components/pages/footer/footer.component';
import { HomeComponent } from './_components/pages/_home/home.component';
import { CrudModule } from '../crud/crud.module'; // Importe o CrudModule aqui

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
