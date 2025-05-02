import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherApiService } from '../../../services/weatherAPI.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  /**
   * Injects the WeatherApiService to access and manipulate weather data.
   * 
   * @param weatherApiService - The service used to get weather data.
   */
  constructor(public weatherApiService: WeatherApiService) {}


  /**
   * Called when the search form is submitted.
   * Triggers the weather data fetch for the currently searched location,
   * then clears the input field.
   */
  onSubmit() {
    this.weatherApiService.saveWeatherData();
    this.weatherApiService.searchedLocation = '';
  }
}