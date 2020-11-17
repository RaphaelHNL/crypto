import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {

  nome: string;
  saldo: string;

  btc: string;
  ltc: string;
  paxg: string;
  eth: string;

  btcIcon: any;
  ltcIcon: any;
  paxgIcon: any;
  ethIcon: any;

  

  btcCoin: any = [];

  ethCoin: string;
  ethCompra: number;
  ethVenda: number;

  btcCoinName: string;
  btcCompra: number;
  btcVenda: number;

  ltcCoin: string;
  ltcCompra: number;
  ltcVenda: number;

  paxCoin: string;
  paxCompra: number;
  paxVenda: number;

  bitCoinArray = ['BTC', 'LTC', 'ETH', 'PAXG'];


  constructor(private dadosService: DadosService, private router: Router, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
      this.btcIcon = this.matIconRegistry.addSvgIcon(
        "btcIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/bitcoin.svg")

        
      );
      this.ltcIcon = this.matIconRegistry.addSvgIcon(
        "ltcIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/litecoin.svg")

        
      );
      this.paxgIcon = this.matIconRegistry.addSvgIcon(
        "paxgIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/pax.svg")

        
      );

      this.ethIcon = this.matIconRegistry.addSvgIcon(
        "ethIcon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/ethereum.svg")

        
      );
     }

  ngOnInit() {
    this.dados();
    this.teste()

  
    
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  dados(){
    this.dadosService.dados()
    .subscribe((dados: any) => {
      this.nome = dados.Nome;
      this.saldo = dados.Saldo_Reais;
      this.btc = dados.Saldo_BTC;
      this.ltc = dados.Saldo_LTC;
      this.paxg = dados.Saldo_PAXG;
      this.eth = dados.Saldo_ETH;
      
    })
  }

  teste(){
    console.log(this.bitCoinArray.map(dado => {
      this.verMoeda(dado);
      
    }))
  }


  verMoeda(moeda: any){
    
    this.dadosService.valorMoeda({Moedas: [moeda]})
    .subscribe(moedas => {
      if(moeda == 'ETH'){
      this.ethCoin = moeda;
      this.ethCompra = moedas[moeda].buy;
      this.ethVenda = moedas[moeda].sell; 
    }  else if(moeda == 'BTC'){
      this.btcCoinName = moeda;
      this.btcCompra = moedas[moeda].buy;
      this.btcVenda = moedas[moeda].sell; 
    }
    else if(moeda == 'LTC'){
      this.ltcCoin = moeda;
      this.ltcCompra = moedas[moeda].buy;
      this.ltcVenda = moedas[moeda].sell; 
    }
    else{
      this.paxCoin = moeda;
      this.paxCompra = moedas[moeda].buy;
      this.paxVenda = moedas[moeda].sell; 
    }
      // this.btcCoin.push(this.nameBitcoin, this.precoCompra, this.precoVenda)
      // console.log( this.btcCoin)

    
  })
}



}
