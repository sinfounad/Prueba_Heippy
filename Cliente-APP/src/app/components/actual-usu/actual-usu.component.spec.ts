import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualUsuComponent } from './actual-usu.component';

describe('ActualUsuComponent', () => {
  let component: ActualUsuComponent;
  let fixture: ComponentFixture<ActualUsuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualUsuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualUsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
