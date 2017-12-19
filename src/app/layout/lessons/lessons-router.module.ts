import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonsComponent} from './lessons.component';
import {AddLessonsComponent} from './add-lessons/add-lessons.component';
import {EditLessonsComponent} from './edit-lessons/edit-lessons.component';
const routes: Routes = [
    {
        path: '',
        component: LessonsComponent
    },
    {
        path: 'add',
        component: AddLessonsComponent
    },
    {
        path: 'edit',
        component: EditLessonsComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]

})
export class LessonsRouterModule { }
