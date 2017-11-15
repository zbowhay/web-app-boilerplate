import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forecast } from '../models/index';

@Injectable()
export class DarkSkyWeatherService {
  private urlPrefix = '/api/darkSkyWeather';

  constructor( private http: HttpClient ) { }

  public getForecast(lat, lon): Promise<Forecast> {
    return new Promise<Forecast>((resolve, reject) => {
      this.http.get(`${this.urlPrefix}/${lat},${lon}`).toPromise()
      .then((data) => { resolve(this.mapToForecast(data)); })
      .catch((err) => { reject(err); });
    });
  }

  private mapToForecast(data: any): Forecast {
    return {
      lat: data.latitude,
      lon: data.longitude,
      timezone: data.timezone
    } as Forecast;
  }
}
