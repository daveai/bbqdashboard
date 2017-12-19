import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LessonsComponent} from './lessons.component';
import {LessonsRouterModule} from './lessons-router.module';
import {PageHeaderModule} from '../../shared/modules';
import {AddLessonsComponent} from './add-lessons/add-lessons.component';
import {EditLessonsComponent} from './edit-lessons/edit-lessons.component';
import {SimpleTinyModule} from '../../simple-tiny/simple-tiny.module';

@NgModule({
  imports: [
    CommonModule,
    LessonsRouterModule,
    PageHeaderModule,
    SimpleTinyModule
  ],
  declarations: [LessonsComponent, AddLessonsComponent, EditLessonsComponent]
})
export class LessonsModule { }
