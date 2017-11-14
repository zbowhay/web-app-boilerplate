import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // tslint:disable-line
  templateUrl: './app.component.html',
  styles: [ './app.component.css' ],
})
export class AppComponent {
  public title: String;

  constructor() {
    this.setTitle('App Component!');
  }

  setTitle(str: String) {
    this.title = str;
  }
}
