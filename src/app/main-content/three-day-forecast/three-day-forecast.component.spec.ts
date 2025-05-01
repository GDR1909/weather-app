import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDayForecastComponent } from './three-day-forecast.component';

describe('ThreeDayForecastComponent', () => {
  let component: ThreeDayForecastComponent;
  let fixture: ComponentFixture<ThreeDayForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDayForecastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDayForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});