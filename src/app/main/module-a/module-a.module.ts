import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ModuleAComponent } from './module-a/module-a.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [FirstComponent, SecondComponent, ModuleAComponent],
  imports: [
    CommonModule,
    ModuleARoutingModule,
    WidgetsModule
  ]
})
export class ModuleAModule { }
