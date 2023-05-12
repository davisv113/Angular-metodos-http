import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form: FormGroup
  formEnviado: boolean = false;

  message(icon: any, message: string){
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: icon,
      title: message
    })
  }


  constructor(
    private fb: FormBuilder,
    private userService: UserService
    ) {
    this.form = this.fb.group({
      nome: ['', [Validators.required ]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    this.formEnviado = true;
    this.userService.novoUsuario(this.form.value).subscribe(
      res => this.message('success', 'Conta Criada com Sucesso!'),
      error => this.message('error', 'Opps, Houve um Problema')
    )
  }
}
