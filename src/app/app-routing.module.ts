import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './component/test1/test1.component';
import { Test2Component } from './component/test2/test2.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test1' },
  {path:'test1',component:Test1Component},
  {path:'test2',component:Test2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
