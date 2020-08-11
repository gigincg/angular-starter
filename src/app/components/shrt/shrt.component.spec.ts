import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrtComponent } from './shrt.component';

describe('ShrtComponent', () => {
  let component: ShrtComponent;
  let fixture: ComponentFixture<ShrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
