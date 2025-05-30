import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { TodaysForecastComponent } from './todays-forecast/todays-forecast.component';
import { AirConditionsComponent } from './air-conditions/air-conditions.component';
import { ThreeDayForecastComponent } from './three-day-forecast/three-day-forecast.component';
import { PopularCitiesComponent } from './popular-cities/popular-cities.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CurrentWeatherComponent,
    TodaysForecastComponent,
    AirConditionsComponent,
    ThreeDayForecastComponent,
    PopularCitiesComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}