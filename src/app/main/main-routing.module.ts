import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'module-a', data: { name: 'ModuleA' }, loadChildren: './module-a/module-a.module#ModuleAModule' },
      { path: 'module-b', data: { name: 'ModuleB' }, loadChildren: './module-b/module-b.module#ModuleBModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
