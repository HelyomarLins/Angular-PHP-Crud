import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/pages/_home/home.component';
import { CrudComponent } from '../crud/crud.component'; // Importe o CrudComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para HomeComponent (página inicial)
  {
    path: 'crud',
    component: CrudComponent, // Configure a rota /crud para exibir CrudComponent
    loadChildren: () => import('../crud/crud.module').then(m => m.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
