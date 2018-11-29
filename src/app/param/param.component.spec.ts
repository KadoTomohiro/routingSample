import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamComponent } from './hoge.component';

describe('HogeComponent', () => {
  let component: ParamComponent;
  let fixture: ComponentFixture<ParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
