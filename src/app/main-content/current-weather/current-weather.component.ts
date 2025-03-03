import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}