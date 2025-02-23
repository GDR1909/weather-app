import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '749e929b225b1e08817d74ae481225a7';
  private apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = this.apiUrl;
    return this.http.get<any>(url).pipe(
      // Hier kannst du das Ergebnis loggen
      tap(data => console.log('Wetterdaten:', data))  // data ist die Antwort von der API
    );
  }
}
