import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentUserComponent } from './pages/current-user/current-user.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
