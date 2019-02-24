import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { ServicesModule } from './services/services.module';
import { WidgetsModule } from './widgets/widgets.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    ServicesModule.forRoot(),
    WidgetsModule
  ]
})
export class MainModule { }
