import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { CommonModule } from '@angular/common';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-popular-cities',
  standalone: true,
  imports: [CommonModule, RoundPipe],
  templateUrl: './popular-cities.component.html',
  styleUrl: './popular-cities.component.scss',
})
export class PopularCitiesComponent implements OnInit {

  popularCities: string[] = ['Berlin', 'London', 'Rome'];

  weatherData: {
    city: string;
    icon: string;
    condition: string;
    maxTemp: number;
    minTemp: number;
  }[] = [];


  constructor(public weatherApiService: WeatherApiService) {}

  ngOnInit(): void {
    this.loadWeatherData();
  }

  loadWeatherData(): void {
    this.popularCities.forEach((city) => {
      this.weatherApiService.getWeather(city).subscribe({
        next: (data) => {
          this.weatherData.push({
            city: city,
            icon: data.current.condition.icon, // Wetter-Icon
            condition: data.current.condition.text, // Wetter-Beschreibung
            maxTemp: data.forecast.forecastday[0].day.maxtemp_c, // Höchsttemperatur
            minTemp: data.forecast.forecastday[0].day.mintemp_c, // Mindesttemperatur
          });
        },
        error: (err) => console.error(`Fehler bei ${city}:`, err),
      });
    });
  }

  showWeatherDataOfPopularCity(popularCity: string) {
    console.log('clicked on:', popularCity);
    this.weatherApiService.searchedLocation = popularCity;
    console.log('the searched location is:', this.weatherApiService.searchedLocation);
    this.weatherApiService.saveWeatherData();
    this.weatherApiService.searchedLocation = '';
  }
}