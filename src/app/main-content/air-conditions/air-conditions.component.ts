import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  imports: [],
  templateUrl: './air-conditions.component.html',
  styleUrl: './air-conditions.component.scss'
})
export class AirConditionsComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}