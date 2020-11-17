import { Component, OnInit } from '@angular/core';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  extratoArray: any = [];


  constructor(private dadosService: DadosService) { }

  ngOnInit() {
    this.extrato();
  }

  extrato(){
    this.dadosService.extrato()
    .subscribe(itemExtrato => {
      this.extratoArray = itemExtrato;
    })
  }

}
