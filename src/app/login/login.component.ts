import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  meuFormGroup = new FormGroup({
    Email: new FormControl('', Validators.required),
    Senha: new FormControl('', Validators.required),
  })
  constructor(private dadosService: DadosService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.dadosService.login(this.meuFormGroup.value)
    .subscribe((logar: any) => {
      console.log(logar);
      this.meuFormGroup.reset();
      window.setInterval(() => {
        localStorage.setItem(`token`, logar.token);
        this.router.navigateByUrl('/transacoes');
    }, 1000);
    },
    error => {
      alert('Email ou senha inválido.')
    }
    )
  }

}
