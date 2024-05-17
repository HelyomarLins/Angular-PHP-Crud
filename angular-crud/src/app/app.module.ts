import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // Importe o RouterModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/pages/navbar/navbar.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { FooterComponent } from './_components/pages/footer/footer.component';
import { HomeComponent } from './_components/pages/_home/home.component';
import { CrudModule } from '../crud/crud.module'; // Importe o CrudModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // AppRoutingModule deve vir antes de RouterModule
    RouterModule,      // Adicione RouterModule aos imports
    FormsModule,
    HttpClientModule,
    CrudModule        // Importe o CrudModule na seção de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
