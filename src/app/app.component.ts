import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faClose  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ailos-challenge';

  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faClose);
  }
}
