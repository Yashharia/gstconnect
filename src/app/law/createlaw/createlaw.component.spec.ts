import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelawComponent } from './createlaw.component';

describe('CreatelawComponent', () => {
  let component: CreatelawComponent;
  let fixture: ComponentFixture<CreatelawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatelawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
