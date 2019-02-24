import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAComponent } from './module-a/module-a.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', data: { foo: 'bar' }, component: ModuleAComponent },
  { path: 'first', component: FirstComponent },
  { path: 'second', data: { page: 'second' }, component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
