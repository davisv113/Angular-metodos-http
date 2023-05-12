import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private user: UserService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  teste() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: 'Usuario ou senha Invalidos!',
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.user.autenticarUsuario().subscribe((res) => {
      console.log(res, 'ola');
      const filtered = res.filter((t: any) => {
        return (
          this.form.value.email === t.email &&
          this.form.value.senha === t.senha
        );
      });
      if (filtered.length > 0) {
        this.router.navigate(['tabela']);
      } else {
        this.teste();
      }
    });
  }
}
