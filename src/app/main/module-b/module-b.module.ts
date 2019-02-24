import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { ModuleBComponent } from './module-b/module-b.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [ThirdComponent, FourthComponent, ModuleBComponent],
  imports: [
    CommonModule,
    ModuleBRoutingModule,
    WidgetsModule
  ]
})
export class ModuleBModule { }
