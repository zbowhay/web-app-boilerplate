import { Component } from '@angular/core';
import { DarkSkyWeatherService } from './services/index';
import { Forecast } from './models/index';

@Component({
  selector: 'my-app', // tslint:disable-line
  templateUrl: './app.component.html',
  styles: [ './app.component.css' ],
})
export class AppComponent {
  public title: String;
  public dallasForecast: Forecast;

  constructor(private _darkSky: DarkSkyWeatherService) {
    this.setTitle('App Component!');
    this.getDallasForecast();
  }

  setTitle(str: String) {
    this.title = str;
  }

  getDallasForecast() {
    const dallas = {
      lat: 32.7767,
      lon: 96.7970
    };
    this._darkSky.getForecast(dallas.lat, dallas.lon)
      .then((forecast) => {
        this.dallasForecast = forecast;
        console.log(this.dallasForecast);
      })
      .catch((err) => console.error(err));
  }
}
