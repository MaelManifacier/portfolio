import { Component, OnInit } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub, faAngular, faEmpire, faFly, faQq } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.sass']
})
export class PageAccueilComponent implements OnInit {

  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faAngular, faEmpire, faFly, faQq);
   }

  ngOnInit() {
  }

}
