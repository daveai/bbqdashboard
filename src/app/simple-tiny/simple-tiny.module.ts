import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleTinyComponent} from './simple-tiny.component';

@NgModule({
  declarations: [SimpleTinyComponent],
  exports: [SimpleTinyComponent]
})
export class SimpleTinyModule { }
