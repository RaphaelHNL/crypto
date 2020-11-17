import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from 'src/app/dados.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {
  meuFormGroup = new FormGroup({
    Valor: new FormControl('', Validators.required),
  })


  constructor(private dadosService: DadosService) { }

  ngOnInit() {
   
  }

  


  sacar(){
    this.meuFormGroup.value.Valor = this.meuFormGroup.value.Valor.toString().replace('.', '').replace(',', '.');
    this.dadosService.sacar(this.meuFormGroup.value)
    .subscribe(deposito => {
      console.log(deposito);
      this.meuFormGroup.reset();
      alert('Saque realizado com sucesso!')
    },
    (error => {
      alert('Não foi possível realizar o saque!')
    }))
  }

}
