import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from './../../models/credenciais';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private service: AuthService) { }
  //constructor(private toast: ToastrService) { }
  //Problema na instalação do Toast aula 37, ficamos sem a mensagem

  logar(){
    this.service.authenticate;
  }

  ngOnInit(): void {
  }

  validaCampos(): boolean{
    return this.email.valid && this.senha.valid      
  }

}
