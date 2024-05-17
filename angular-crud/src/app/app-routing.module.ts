import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/pages/_home/home.component';
import { CrudComponent } from '../crud/crud.component'; // Importe o CrudComponent
import { ListarAlunosComponent } from '../crud/listar-alunos/listar-alunos.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Rota para HomeComponent (página inicial)

  { path: 'crud',
    component: CrudComponent, // Configure a rota /crud para exibir CrudComponent
    children: [ // Mova 'listar-alunos' para as rotas filhas de '/crud'
      { path: 'listar-alunos', component: ListarAlunosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
