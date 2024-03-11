import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormPageComponent } from './form-page/form-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Figma';
}
