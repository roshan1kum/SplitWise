import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
    path:'Groups',
    loadChildren:()=>import('./group/group.module').then(mod=>mod.GroupModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
