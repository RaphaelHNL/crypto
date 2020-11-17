import { TestObject } from 'protractor/built/driverProviders';

export class Usuario {

  constructor(Nome: string, Sobrenome: string, Email: string, CPF: string, Data_Nascimento: Date, Senha: string, RG: number,
    Digito: string, Sexo: string) {
    this.Nome = Nome;
    this.Email = Email;
    this.CPF = CPF;
    this.Data_Nascimento= Data_Nascimento;
    this.Senha = Senha;
    this.Sobrenome = Sobrenome;
    this.RG = RG;
    this.Digito = Digito;
    this.Sexo = Sexo;
  }

  Nome: string;
  Email: string;
  CPF: string;
  Data_Nascimento: Date;
  Senha: string;
  Sobrenome: string;
  RG: number;
  Digito: string;
  Sexo: string;

}