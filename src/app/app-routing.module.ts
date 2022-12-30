import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './component/test1/test1.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test1' },
  {path:'test1',component:Test1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
