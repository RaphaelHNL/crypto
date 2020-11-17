import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {
  meuFormGroup = new FormGroup({
    Valor: new FormControl('', Validators.required),
  })
  constructor(private dadosService: DadosService) { }

  ngOnInit() {
  }

  depositar(){
    this.meuFormGroup.value.Valor = this.meuFormGroup.value.Valor.toString().replace('.', '').replace(',', '.');
    this.dadosService.depositar(this.meuFormGroup.value)
    .subscribe(deposito => {
      console.log(deposito);
      this.meuFormGroup.reset();
      alert('Depósito realizado com sucesso!')
    },
    (error => {
      alert('Não foi possível realizar o depósito!')
    }))
  }

}
