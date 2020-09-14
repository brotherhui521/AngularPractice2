import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAttrExerciseComponent } from './cus-attr-exercise.component';

describe('CusAttrExerciseComponent', () => {
  let component: CusAttrExerciseComponent;
  let fixture: ComponentFixture<CusAttrExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusAttrExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusAttrExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
