import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [NavComponent],
})
export class CoreModule { }
