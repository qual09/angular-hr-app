import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecruitmentComponent } from './new-recruitment.component';

describe('PageNotFoundComponent', () => {
  let component: NewRecruitmentComponent;
  let fixture: ComponentFixture<NewRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewRecruitmentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
