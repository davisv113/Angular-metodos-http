import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { UserModel } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {
  text!: string;
  form!: FormGroup
  dados: any[] = []
  editMode: boolean = false

  constructor(private user: UserService, private fb: FormBuilder,) {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.user.autenticarUsuario().subscribe({
      next: (res)=>{
        this.dados = res
      }
    }
    )
  }


  editFunc(){
    this.editMode = true
  }

  editarUsuario(usuario: any) {
    const id = usuario.id;
    const dadosAtualizados = {
    nome: this.form.value.nome,
    email: this.form.value.email,
    senha: this.form.value.senha,
  };
    this.user.editarUsuario(id, dadosAtualizados).subscribe(
      (res) => {
        console.log('Usuario editado');
        this.editMode = false
      },
      (error) => {
        console.error('Erro ao editar usuário', error);
      }
    )
  }

  excluirUsuario(index:any) {
    this.user.excluirUsuario(index).subscribe (
      res => res,
      error => error
    )
  }

}
