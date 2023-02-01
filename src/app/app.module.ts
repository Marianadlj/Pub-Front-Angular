import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { AgendamentosComponent } from './components/pages/agendamentos/agendamentos.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FuncionariosComponent } from './components/pages/funcionarios/funcionarios.component';
import { FornecedoresComponent } from './components/pages/fornecedores/fornecedores.component';
import { BigBoxComponent } from './components/big-box/big-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { AgendamentoComponent } from './components/pages/new/agendamento/agendamento.component';
import { EventoComponent } from './components/pages/new/evento/evento.component';
import { FornecedorComponent } from './components/pages/new/fornecedor/fornecedor.component';
import { FuncionarioComponent } from './components/pages/new/funcionario/funcionario.component';
import { BebidaComponent } from './components/pages/new/bebida/bebida.component';
import { ComidaComponent } from './components/pages/new/comida/comida.component';
import { CardComponent } from './components/card/card.component';
import { CardAgendamentoComponent } from './components/card-agendamento/card-agendamento.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { CardFornecedorComponent } from './components/card-fornecedor/card-fornecedor.component';
import { CardFuncionarioComponent } from './components/card-funcionario/card-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EventosComponent,
    AgendamentosComponent,
    MenuComponent,
    FuncionariosComponent,
    FornecedoresComponent,
    BigBoxComponent,
    LoginFormComponent,
    SignupFormComponent,
    SignupComponent,
    AgendamentoComponent,
    EventoComponent,
    FornecedorComponent,
    FuncionarioComponent,
    BebidaComponent,
    ComidaComponent,
    CardComponent,
    CardAgendamentoComponent,
    CardMenuComponent,
    CardFornecedorComponent,
    CardFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
