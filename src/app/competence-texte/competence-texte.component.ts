import { Component, OnInit, Input } from '@angular/core';
import { Competence } from '../model/Competence';

@Component({
  selector: 'app-competence-texte',
  templateUrl: './competence-texte.component.html',
  styleUrls: ['./competence-texte.component.sass']
})
export class CompetenceTexteComponent implements OnInit {

  @Input() competence: Competence;

  constructor() { }

  ngOnInit() {
  }

}
