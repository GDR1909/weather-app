import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { TodaysForecastComponent } from './todays-forecast/todays-forecast.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CurrentWeatherComponent,
    TodaysForecastComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
