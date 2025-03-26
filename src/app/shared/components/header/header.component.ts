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
  constructor(public weatherApiService: WeatherApiService) {}

  onSubmit() {
    this.weatherApiService.saveWeatherData();
    this.weatherApiService.searchedLocation = '';
  }
}