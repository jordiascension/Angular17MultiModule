import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentsRoutingModule } from './students-routing.module';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';




@NgModule({
  declarations: [
    StudentListComponent,
    NoticeBoardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
