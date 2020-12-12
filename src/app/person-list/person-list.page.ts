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
    this.listar();
  }

  listar(){
    this.listaPessoas =  this.personService.getPessoas();
  }

  edit(person: Person){

  }
  delete(person: Person){
    this.personService.delete(person);
    this.listar();
  }

}
