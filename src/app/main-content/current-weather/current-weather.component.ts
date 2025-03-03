import { Component } from '@angular/core';
import { WeatherService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent {
  constructor(private weatherService: WeatherService) {
    // this.getWeather('Stuttgart');
  }

  getWeather(city: string) {
    this.weatherService.getWeather(city).subscribe({
      next: (data) => console.log('Wetterdaten:',data),
      error: (err) => console.error('Fehler beim Abrufen der Wetterdaten:', err)
    });
  }
}
