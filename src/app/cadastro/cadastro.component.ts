import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  rgMask = [/[0-9]{8}/];
  digitoMask = [/[A-z0-9]{1}/];


  meuFormGroup = new FormGroup({
    Nome: new FormControl('', Validators.required),
    Email: new FormControl('', Validators.required),
    CPF: new FormControl('', Validators.required),
    Data_Nascimento: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required),
    Sobrenome: new FormControl('', Validators.required),
    RG: new FormControl('', Validators.required),
    Digito: new FormControl('', Validators.required),
    Sexo: new FormControl('', Validators.required),
  })

  constructor(private dadosService: DadosService) { }

  ngOnInit() {
  
  }

  cadastro(){
      this.dadosService.cadastro(this.meuFormGroup.value)
      .subscribe(cadastro => {
        console.log(cadastro);
        this.meuFormGroup.reset();
        alert('Cadastro realizado com sucesso')
      },
      error => {
        alert('não foi possivel realizar o cadastro')
      })
    
  }
  
}
