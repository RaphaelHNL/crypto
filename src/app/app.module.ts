import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TransacoesComponent } from './transacoes/transacoes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { CompraVendaComponent } from './transacoes/compra-venda/compra-venda.component';
import { SaqueComponent } from './transacoes/saque/saque.component';
import { ExtratoComponent } from './transacoes/extrato/extrato.component';
import { ChangeComponent } from './transacoes/change/change.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { DepositarComponent } from './transacoes/depositar/depositar.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { CategoriaPipe } from './categoria.pipe';
import { NgxMaskModule, IConfig  } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TransacoesComponent,
    CompraVendaComponent,
    SaqueComponent,
    ExtratoComponent,
    ChangeComponent,
    DepositarComponent,
    CategoriaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDividerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatMenuModule,
    NgxMaskModule.forRoot(maskConfig),
    
    
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
