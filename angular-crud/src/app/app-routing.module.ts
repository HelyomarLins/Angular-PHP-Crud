import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/pages/_home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para HomeComponent (página inicial)
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
