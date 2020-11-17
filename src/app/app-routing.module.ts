import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ChangeComponent } from './transacoes/change/change.component';
import { CompraVendaComponent } from './transacoes/compra-venda/compra-venda.component';
import { DepositarComponent } from './transacoes/depositar/depositar.component';
import { ExtratoComponent } from './transacoes/extrato/extrato.component';
import { SaqueComponent } from './transacoes/saque/saque.component';
import { TransacoesComponent } from './transacoes/transacoes.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'transacoes', component: TransacoesComponent},
  {path: 'compravenda', component: CompraVendaComponent},
  {path: 'saque', component: SaqueComponent},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'change', component: ChangeComponent},
  {path: 'depositar', component: DepositarComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
