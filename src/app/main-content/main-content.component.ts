import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CurrentWeatherComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
