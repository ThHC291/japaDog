import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {

  listaPessoas: Person[];

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.listaPessoas =  this.personService.getPessoas();
  }

}
