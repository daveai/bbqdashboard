import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { PageHeaderModule } from '../../shared/modules';
import { AddCourseComponent } from './add-course/add-course.component';
import {CollapseComponent} from '../bs-component/components';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditCourseComponent } from './edit-course/edit-course.component';
import {SimpleTinyModule} from '../../simple-tiny/simple-tiny.module';

@NgModule({
  imports: [
      CommonModule,
      CoursesRoutingModule,
      PageHeaderModule,
      SimpleTinyModule,
      NgbModule.forRoot()
  ],
  declarations: [CoursesComponent, AddCourseComponent, CollapseComponent, EditCourseComponent],
})
export class CoursesModule { }
