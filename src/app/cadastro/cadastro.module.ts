import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
  },
];

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, CadastroComponent],
})
export class CadastroModule { }
