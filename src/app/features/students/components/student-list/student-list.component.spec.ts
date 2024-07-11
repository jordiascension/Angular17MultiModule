import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListComponent } from './student-list.component';
import { SpinnerComponent } from '../../../../shared/components/spinner/spinner.component';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentListComponent, SpinnerComponent, ModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
