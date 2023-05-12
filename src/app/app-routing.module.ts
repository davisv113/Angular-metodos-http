import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule),
  },
  {
    path: 'cadastro',
    loadChildren: () =>
      import(`./cadastro/cadastro.module`).then((m) => m.CadastroModule)
  },
  {
    path: 'tabela',
    loadChildren: () =>
      import(`./tabela/tabela.module`).then((m) => m.TabelaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
