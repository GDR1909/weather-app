import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss'
})
export class CurrentWeatherComponent implements OnInit {
  constructor(public weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
      this.weatherApiService.weatherDataUpdated$.subscribe(data => {
        console.log('Updated weather data:', data);
      });
  }
}