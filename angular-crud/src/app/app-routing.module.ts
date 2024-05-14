import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDisciplinaComponent } from './_components/cad-disciplina/cad-disciplina.component';
import { ListaDisciplinaComponent } from './_components/listar-disciplina/listar-disciplina.component';

const routes: Routes = [
  { path: 'cadastrar-disciplina', component: CadastroDisciplinaComponent },
  { path: 'listar-disciplinas', component: ListaDisciplinaComponent },
  { path: '', redirectTo: '/cadastrar-disciplina', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
