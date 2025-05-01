import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = '6ffa0d9448c34c27a1991250252402';
  private apiUrl = `https://api.weatherapi.com/v1/forecast.json`;

  searchedLocation: string = "";
  weatherData: any;
  private weatherDataUpdated = new Subject<any>();
  weatherDataUpdated$ = this.weatherDataUpdated.asObservable();

  constructor(public http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;
    return this.http.get<any>(url);
  }

  saveWeatherData() {
    this.weatherData = null;

    this.getWeather(this.searchedLocation).subscribe({
      next: (data) => {
        // console.log('Wetterdaten:', data);
        this.weatherData = data;
        this.weatherDataUpdated.next(data);
      },
      error: (err) => console.error('Fehler beim Abrufen der Wetterdaten:', err)
    });
  }
}