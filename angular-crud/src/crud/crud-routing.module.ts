import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/_components/pages/_home/home.component';
import { CrudComponent } from './crud.component'; // Importe o componente CRUDComponent aqui

const routes: Routes = [
  {
    path: 'crud',
    component: CrudComponent, // Use CRUDComponent como o componente pai
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
