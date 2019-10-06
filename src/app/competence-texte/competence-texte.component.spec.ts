import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceTexteComponent } from './competence-texte.component';

describe('CompetenceTexteComponent', () => {
  let component: CompetenceTexteComponent;
  let fixture: ComponentFixture<CompetenceTexteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenceTexteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceTexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
