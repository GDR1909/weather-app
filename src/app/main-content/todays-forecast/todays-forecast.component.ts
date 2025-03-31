import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-todays-forecast',
  standalone: true,
  imports: [RoundPipe],
  templateUrl: './todays-forecast.component.html',
  styleUrl: './todays-forecast.component.scss',
})
export class TodaysForecastComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}