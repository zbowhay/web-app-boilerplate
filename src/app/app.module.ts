/* Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
/* Components */
import { AppComponent } from './app.component';
/* Services */
import { DarkSkyWeatherService } from './services/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ DarkSkyWeatherService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
