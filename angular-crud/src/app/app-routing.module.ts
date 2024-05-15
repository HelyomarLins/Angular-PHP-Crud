import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDisciplinaComponent } from './_components/cad-disciplina/cad-disciplina.component';
import { ListaDisciplinaComponent } from './_components/listar-disciplina/listar-disciplina.component';
import { HomeComponent } from './_components/pages/_home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Rota para HomeComponent
  { path: 'cadastrar-disciplina', component: CadastroDisciplinaComponent },
  { path: 'listar-disciplinas', component: ListaDisciplinaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redireciona para HomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
