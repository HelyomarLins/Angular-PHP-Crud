// crud.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importe se estiver usando Template Driven Forms
import { ReactiveFormsModule } from '@angular/forms'; // Importe se estiver usando Reactive Forms
import { HttpClientModule } from '@angular/common/http'; // Importe para fazer requisições HTTP
import { CrudRoutingModule } from './crud-routing.module';
// ... importe seus componentes CRUD aqui ...

@NgModule({
  declarations: [
    // ... seus componentes CRUD ...
  ],
  imports: [
    CommonModule,
    FormsModule, // Importe se necessário
    ReactiveFormsModule, // Importe se necessário
    HttpClientModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
