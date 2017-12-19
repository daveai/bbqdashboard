import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import {EditCourseComponent} from './edit-course/edit-course.component';

const routes: Routes = [
    {
        path: '',
        component: CoursesComponent
    },
    {
        path: 'add',
        component: AddCourseComponent
    },
    {
        path: 'edit',
        component: EditCourseComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
