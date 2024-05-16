import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud.component';
// Importe os componentes das funcionalidades CRUD
import { ListaDisciplinaComponent } from './listar-disciplina/listar-disciplina.component';
import { CadastroDisciplinaComponent } from './cad-disciplina/cad-disciplina.component';

const routes: Routes = [
  {
  path: '',
  component: CrudComponent,
  children: [
      // Rotas filhas do CrudModule
      { path: 'listar-disciplina', component: ListaDisciplinaComponent },
      { path: 'cadastrar-disciplina', component: CadastroDisciplinaComponent },
      // ... outras rotas
      //{ path: 'produtos', component: '' }, // Substitua ProdutosComponent pelo componente correto
    // { path: 'usuarios', component:''  }, // Substitua UsuariosComponent pelo componente correto
    // { path: 'alunos', component: '' },   // Substitua AlunosComponent pelo componente correto
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
