import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {


  /**
   * Injects the WeatherApiService to access current weather data
   * provided by the external API.
   * 
   * @param weatherApiService - Service that manages weather data.
   */
  constructor(public weatherApiService: WeatherApiService) {}
}