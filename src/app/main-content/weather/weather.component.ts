import { Component } from '@angular/core';
import { WeatherService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
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
