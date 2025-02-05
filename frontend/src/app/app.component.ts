import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lukas';
  subtitle = 'bla'

  update() {
    if (this.title != 'Techradar') {

      this.title = "Techradar"
      this.subtitle = 'bla'
    }
    else {
      this.title = 'Lukas'
      this.subtitle = "blu"
    }
  }
}
