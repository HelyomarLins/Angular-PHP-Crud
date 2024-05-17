// crud/crud.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Mantenha apenas o FormsModule
import { HttpClientModule } from '@angular/common/http';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { NavbarComponent } from '../app/_components/pages/navbar/navbar.component';
import { BaseUiComponent } from '../app/_components/base-ui/base-ui.component';
import { FooterComponent } from '../app/_components/pages/footer/footer.component';
import { BotoesCrudComponent } from './botoes-crud/botoes-crud.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';

@NgModule({
  declarations: [
    CrudComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent,
    BotoesCrudComponent,
    ListarAlunosComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
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
