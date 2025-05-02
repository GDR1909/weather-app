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

  /** A list of predefined popular city names */
  popularCities: string[] = ['Berlin', 'London', 'Rome'];

  /**
   * An array that stores summarized weather data
   * for each popular city.
   */
  weatherData: {
    city: string;
    icon: string;
    condition: string;
    maxTemp: number;
    minTemp: number;
  }[] = [];


  /**
   * Injects the WeatherApiService to fetch weather data.
   * 
   * @param weatherApiService - Service that handles API requests.
   */
  constructor(public weatherApiService: WeatherApiService) {}


  /**
   * Angular lifecycle hook called on component initialization.
   * Triggers loading of weather data for all popular cities.
   */
  ngOnInit(): void {
    this.loadWeatherData();
  }


  /**
   * Loads weather data for each city in the popularCities list.
   * The data is pushed into the `weatherData` array for display.
   */
  loadWeatherData(): void {
    this.popularCities.forEach((city) => {
      this.weatherApiService.getWeather(city).subscribe({
        next: (data) => {
          this.weatherData.push({
            city: city,
            icon: data.current.condition.icon,
            condition: data.current.condition.text,
            maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
            minTemp: data.forecast.forecastday[0].day.mintemp_c,
          });
        },
        error: (err) => console.error(`Fehler bei ${city}:`, err),
      });
    });
  }


  /**
   * Fetches detailed weather data when a popular city is clicked.
   * Temporarily sets the searchedLocation to the selected city.
   * 
   * @param popularCity - The city selected by the user.
   */
  showWeatherDataOfPopularCity(popularCity: string) {
    this.weatherApiService.searchedLocation = popularCity;
    this.weatherApiService.saveWeatherData();
    this.weatherApiService.searchedLocation = '';
  }
}