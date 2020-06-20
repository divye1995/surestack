import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDViewComponent } from './threedview.component';

describe('ThreeDViewComponent', () => {
  let component: ThreeDViewComponent;
  let fixture: ComponentFixture<ThreeDViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
