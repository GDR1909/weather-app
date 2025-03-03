import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { PopularCitiesComponent } from './popular-cities/popular-cities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { AlertsComponent } from './alerts/alerts.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CurrentWeatherComponent,
    PopularCitiesComponent,
    ForecastComponent,
    AlertsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
