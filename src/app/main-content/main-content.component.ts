import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { TodaysForecastComponent } from './todays-forecast/todays-forecast.component';
import { AirConditionsComponent } from './air-conditions/air-conditions.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CurrentWeatherComponent,
    TodaysForecastComponent,
    AirConditionsComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
