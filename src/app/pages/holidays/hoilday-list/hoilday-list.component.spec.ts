import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoildayListComponent } from './hoilday-list.component';

describe('HoildayListComponent', () => {
  let component: HoildayListComponent;
  let fixture: ComponentFixture<HoildayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoildayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoildayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
