import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-air-conditions',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './air-conditions.component.html',
  styleUrl: './air-conditions.component.scss'
})
export class AirConditionsComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}