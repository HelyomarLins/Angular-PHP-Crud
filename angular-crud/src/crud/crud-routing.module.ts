import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importe os componentes das funcionalidades CRUD
import { ListaDisciplinaComponent } from './listar-disciplina/listar-disciplina.component';
import { CadastroDisciplinaComponent } from './cad-disciplina/cad-disciplina.component';

const routes: Routes = [
  // Rotas filhas do CrudModule
  { path: 'listar-disciplina', component: ListaDisciplinaComponent },
  { path: 'cadastrar-disciplina', component: CadastroDisciplinaComponent },
  // ... outras rotas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
