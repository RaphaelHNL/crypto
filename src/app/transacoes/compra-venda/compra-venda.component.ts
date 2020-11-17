import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-compra-venda',
  templateUrl: './compra-venda.component.html',
  styleUrls: ['./compra-venda.component.css']
})
export class CompraVendaComponent implements OnInit {
  meuFormGroup = new FormGroup({
    Moedas: new FormControl('', Validators.required),
    valorTotal: new FormControl('', Validators.required),
  })

  moedas = [
    {sigla: "BTC"},
    {sigla: "ETH"},
    {sigla: "LTC"},
    {sigla: "PAXG"}
  ]

  nomeMoeda: string;

  precoMoeda: number = 0;

  precoCompra: number = 0;

  totalValor: number = 0;

  nomeMoedaTwo: string;

  precoMoedaTwo: number = 0;

  precoVendaTwo: number = 0;

  totalValorTwo: number = 0;

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    
  }

  changeCoin(event){
    this.verMoeda(event, 'compra');
  }

  changeCoinVenda(event){
    this.verMoeda(event, 'venda');
  }

  valorTotal(valor, tipo){
    if(tipo == 'compra'){
      this.totalValor = valor;
      this.precoCompra = valor / this.precoMoeda;
    }else{
      this.totalValorTwo = valor;
      this.precoVendaTwo = valor * this.precoMoedaTwo;
    }

  }

  verMoeda(moeda, tipo){
    console.log({Moedas: [moeda]})
    this.dadosService.valorMoeda({Moedas: [moeda]})
    .subscribe(moedas => {
      if(tipo == 'compra'){
        this.nomeMoeda = moeda;
        this.precoMoeda = moedas[moeda].buy;
        this.valorTotal(this.totalValor, tipo);
      }else{
        this.nomeMoedaTwo = moeda;
        this.precoMoedaTwo = moedas[moeda].sell;
        this.valorTotal(this.totalValorTwo, tipo);
      }

  })
}

venda(){
  const temp = {
    "Para_Moeda": "R$", 
    "Para_Valor": this.precoVendaTwo.toString().replace(',', '.'),
    "De_Moeda": this.nomeMoedaTwo,
    "De_Valor": this.totalValorTwo.toString().replace(',', '.'),
  }
  this.dadosService.comprar(temp)
  .subscribe(moedas => {
    console.log(moedas);
    alert('Venda realizada com sucesso!');
  },
  (error => {
    alert('Não foi possivel realizar a venda, saldo insuficiente!')
  }))
}

comprar(){
  const temp = {
    "De_Moeda": "R$",
    "De_Valor": this.totalValor.toString().replace('.', '').replace(',', '.'),
    "Para_Moeda": this.nomeMoeda,
    "Para_Valor": this.precoCompra.toString().replace(',', '.')
  }
  this.dadosService.comprar(temp)
  .subscribe(moedas => {
    console.log(moedas);
    alert('Compra realizada com sucesso');
  },
  (error => {
    alert('Não foi possivel realizar a compra, saldo insuficiente!')
  }))
}

}

