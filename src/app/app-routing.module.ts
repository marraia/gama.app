import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'user'
},
{
  path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
},
{
  path: 'hero',
  loadChildren: () => import('./hero/hero.module').then(m => m.HeroModule),
  canActivate: [AuthGuard],
  data: { authGuard: {redirect: '/user'}}
},
{
  path: 'contato',
  loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
