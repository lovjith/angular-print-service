import { Component } from '@angular/core';
import { PrintService } from './print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular print service';

  constructor(public printService: PrintService) { }

}
