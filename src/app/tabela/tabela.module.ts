import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabelaComponent } from './tabela.component';

const routes: Routes = [
  {
    path: '',
    component: TabelaComponent,
  },
];

@NgModule({
  declarations: [TabelaComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, TabelaComponent],
})
export class TabelaModule { }
