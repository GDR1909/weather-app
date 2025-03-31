import { Component } from '@angular/core';
import { WeatherApiService } from '../../services/weatherAPI.service';
import { DatePipe } from '@angular/common';
import { RoundPipe } from '../../pipes/round.pipe';

@Component({
  selector: 'app-three-day-forecast',
  standalone: true,
  imports: [DatePipe, RoundPipe],
  providers: [DatePipe],
  templateUrl: './three-day-forecast.component.html',
  styleUrl: './three-day-forecast.component.scss',
})
export class ThreeDayForecastComponent {
  constructor(public weatherApiService: WeatherApiService) {}
}