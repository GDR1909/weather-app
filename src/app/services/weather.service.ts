import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '6ffa0d9448c34c27a1991250252402';
  private apiUrl = `http://api.weatherapi.com/v1/current.json`;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&lang=de`;
    return this.http.get<any>(url);
  }
}
