import { Component, OnInit } from '@angular/core';
import { COMPETENCES } from '../mocks/mock-competences';
import { Competence } from '../model/Competence';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.sass']
})
export class PageDetailsComponent implements OnInit {

  competences = COMPETENCES;
  selectedCompetence: Competence;

  opacity = 0;

  constructor() { }

  ngOnInit() {
    this.selectedCompetence = this.competences[0];
  }

  onSelect(competence: Competence): void {
    this.selectedCompetence = competence;
    if (this.selectedCompetence.titre == "Android") {
      this.opacity = 1;
    }
    else {
      this.opacity = 0;
    }
  }

}
