import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-todays-forecast',
  standalone: true,
  imports: [],
  templateUrl: './todays-forecast.component.html',
  styleUrl: './todays-forecast.component.scss',
})
export class TodaysForecastComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}