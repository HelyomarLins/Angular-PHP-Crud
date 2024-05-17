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
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CrudComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent,
    BotoesCrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CrudRoutingModule,
    RouterModule
  ],
  exports: [
    CrudComponent,
    NavbarComponent,
    BaseUiComponent,
    FooterComponent,
    BotoesCrudComponent,
    RouterModule
  ]
})
export class CrudModule { }
