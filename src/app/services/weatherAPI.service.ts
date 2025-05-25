import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';


/**
 * Service for fetching weather data from the WeatherAPI and handling updates.
 * 
 * This service provides methods to retrieve weather data for a specified city
 * and to store the fetched data for further use in the application.
 */
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private apiKey = environment.weatherApiKey; // API key loaded from environment settings.
  private apiUrl = `https://api.weatherapi.com/v1/forecast.json`; // Base URL for the weather forecast API endpoint.

  searchedLocation: string = "";
  weatherData: any;
  private weatherDataUpdated = new Subject<any>(); // Subject used to notify components when weather data is updated.
  weatherDataUpdated$ = this.weatherDataUpdated.asObservable(); // Observable that allows components to subscribe to weather data updates.


  /**
   * Constructor to inject the HttpClient service.
   * 
   * @param http - Angular's HttpClient for making HTTP requests.
   */
  constructor(public http: HttpClient) { }


  /**
   * Retrieves the weather data for a given city from WeatherAPI.
   * 
   * @param city - The name of the city to fetch weather data for.
   * @returns An observable containing the weather data response.
   * 
   * The response contains forecast data for the specified city.
   */
  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`;
    return this.http.get<any>(url);
  }


  /**
   * Saves the weather data by fetching it from WeatherAPI.
   * 
   * This method invokes the `getWeather()` method to fetch weather data for
   * the city stored in `searchedLocation`. Once the data is fetched successfully,
   * it is stored in the `weatherData` property and the update is emitted through
   * the `weatherDataUpdated` subject.
   */
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