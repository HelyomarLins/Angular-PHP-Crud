import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudRoutingModule } from './crud-routing.module';

import { CrudComponent } from './crud.component'; // Certifique-se de importar seu componente CRUD
import { NavbarComponent } from '../app/_components/pages/navbar/navbar.component';
import { BaseUiComponent } from '../app/_components/base-ui/base-ui.component';
import { FooterComponent } from '../app/_components/pages/footer/footer.component';
// Importação e declaração de componentes CRUD
@NgModule({
  declarations: [
    CrudComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CrudRoutingModule
  ],
  exports: [
    NavbarComponent,
    BaseUiComponent,
    FooterComponent
  ]
})
export class CrudModule { }
