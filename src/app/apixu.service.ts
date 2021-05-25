import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApixuService {
  constructor(private http: HttpClient) {}
  getWeather(location: string) {
    return this.http.get(
      ' http://api.weatherstack.com/current?access_key=92bed14ec963f04d2f9194491daccb01&query=' +
        location
    );
  }
}
