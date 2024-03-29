import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
