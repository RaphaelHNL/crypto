import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cadastro {
  Nome: string,
  Sobrenome: string,
  CPF: number,
  Email: string,
  Senha: string,
  RG: number,
  Digito: string,
  Sexo: string,
  Data_Nascimento: Date
}

export interface Login {
  Email: string,
  Senha: string
}

export interface Deposito {
  Valor: number
}


export interface Compra {
  De_Moeda: string,
  De_Valor: number,
  Para_Moeda: string,
  Para_Valor: number
}

export interface Moedas {
  Moedas: any;
}

export interface MoedasTwo {
  buy: any;
  sell: any;
}



const httpOptions = {  
   headers: new HttpHeaders({     
  'Content-Type':  'application/json',
   'Accept': 'application/json'
  }) 
  };

  const httpDados = {  
    headers: new HttpHeaders({     
   'Content-Type':  'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
   }) 
   };

const urlBase = 'https://cn1yi4xbe7.execute-api.sa-east-1.amazonaws.com/api';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(private http: HttpClient) { }

  login(logar: Login){
    return this.http.post<Login>(`${urlBase}/login`, logar, httpOptions)
  }

  cadastro(cadastro: Cadastro){
    return this.http.post<Cadastro>(`${urlBase}/register`, cadastro, httpOptions)
  }

  dados(){
    return this.http.get(`${urlBase}/cliente/dados`,  httpDados)
  }

  valorMoedaTwo(){
    return this.http.get(`${urlBase}/moedas/valores`, httpDados)
  }

  depositar(deposito: Deposito){
    return this.http.post<Deposito>(`${urlBase}/ordens/deposito`, deposito,  httpDados)
  }

  sacar(deposito: Deposito){
    return this.http.post<Deposito>(`${urlBase}/ordens/saque`, deposito,  httpDados)
  }

  comprar(comprar: any){
    return this.http.post<Compra>(`${urlBase}/ordens/transferencia`, comprar,  httpDados)
  }

  valorMoeda(moedas: Moedas){
    return this.http.post<Moedas>(`${urlBase}/moedas/valores`, moedas,  httpDados)
  }



  extrato(){
    return this.http.get(`${urlBase}/ordens/extrato`, httpDados)
  }

}
