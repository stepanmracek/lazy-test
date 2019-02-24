import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyLinkComponent } from './my-link/my-link.component';
import { MyCardComponent } from './my-card/my-card.component';
import { RouterModule } from '@angular/router';
import { DoublerPipe } from './doubler.pipe';

@NgModule({
  declarations: [MyLinkComponent, MyCardComponent, DoublerPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonModule, MyCardComponent, MyLinkComponent, DoublerPipe]
})
export class WidgetsModule { }
