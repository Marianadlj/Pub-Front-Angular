import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './components/pages/fornecedores/fornecedores.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { AgendamentosComponent } from './components/pages/agendamentos/agendamentos.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/pages/signup/signup.component';
import { EventoComponent } from './components/pages/new/evento/evento.component';
import { AgendamentoComponent } from './components/pages/new/agendamento/agendamento.component';
import { FornecedorComponent } from './components/pages/new/fornecedor/fornecedor.component';
import { FuncionarioComponent } from './components/pages/new/funcionario/funcionario.component';
import { ComidaComponent } from './components/pages/new/comida/comida.component';
import { BebidaComponent } from './components/pages/new/bebida/bebida.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'eventos', component: EventosComponent},
  {path:'eventos/new', component: EventoComponent},
  {path:'agendamento', component: AgendamentosComponent},
  {path:'agendamento/new', component: AgendamentoComponent},
  {path:'menu', component: MenuComponent},
  {path:'menu/new-food', component: ComidaComponent},
  {path:'menu/new-drink', component: BebidaComponent},
  {path:'fornecedores', component: FornecedoresComponent},
  {path:'fornecedores/new', component: FornecedorComponent},
  {path:'funcionarios', component: FuncionariosComponent},
  {path:'funcionarios/new', component: FuncionarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
