import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { ModuleBComponent } from './module-b/module-b.component';

const routes: Routes = [
  {
    path: '', component: ModuleBComponent, children: [
      { path: 'third', component: ThirdComponent },
      { path: 'fourth', component: FourthComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
