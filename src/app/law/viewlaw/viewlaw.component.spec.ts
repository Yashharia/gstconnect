import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlawComponent } from './viewlaw.component';

describe('ViewlawComponent', () => {
  let component: ViewlawComponent;
  let fixture: ComponentFixture<ViewlawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
