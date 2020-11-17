import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
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
    if(tipo == 'venda'){
      this.totalValorTwo = valor;
      this.precoVendaTwo = valor * this.precoMoedaTwo;      
    }else{
      this.totalValor = valor;
      this.precoCompra = this.precoVendaTwo / this.precoMoeda;
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

comprar(){
  const temp = {
    "De_Moeda": this.nomeMoedaTwo,
    "De_Valor": this.totalValorTwo.toString().replace(',', '.'),
    "Para_Moeda": this.nomeMoeda,
    "Para_Valor": this.precoCompra.toString().replace(',', '.')
  }
  this.dadosService.comprar(temp)
  .subscribe(moedas => {
    console.log(moedas)
    alert('Troca realizada com sucesso!')
    },
    (error => {
      alert('Não foi possível realizar a troca!')
    }))
}
}
