import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-popular-cities',
  standalone: true,
  imports: [],
  templateUrl: './popular-cities.component.html',
  styleUrl: './popular-cities.component.scss',
})
export class PopularCitiesComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}