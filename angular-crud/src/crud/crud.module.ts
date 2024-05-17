// crud/crud.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { BotoesCrudComponent } from './botoes-crud/botoes-crud.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
@NgModule({
  declarations: [
    CrudComponent,
    ListarAlunosComponent,
    BotoesCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrudRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CrudComponent,
    ListarAlunosComponent,
    BotoesCrudComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CrudModule { }
