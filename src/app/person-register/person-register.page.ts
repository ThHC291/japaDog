import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../shared/person';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.page.html',
  styleUrls: ['./person-register.page.scss'],
})
export class PersonRegisterPage implements OnInit {

  person: Person;

  constructor(private personService: PersonService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.person = new Person();
    this.person.id = this.personService.getId();
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));           
    
    if(codigo){
      this.person = this.personService.getPerson(codigo);

      if(this.person.nascimento instanceof Date){
      this.person.nascimento = (<Date>this.person.nascimento).toISOString();
      } 
    }
   }

  ngOnInit() {
  }

  salvar(){
    console.log(this.person);
    this.personService.salvar(this.person);
    this.router.navigate(["person-list"])
  }
}
