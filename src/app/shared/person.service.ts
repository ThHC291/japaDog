import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private pessoas: Person[];

  constructor() {
    this.pessoas = [
      {
        id: 1,
        nome:"Leonardo",
        nascimento: new Date(2018,0,1),
        cpf: "000.000.000-00",
        endereco: "Rua João",
        telefone: 999905001 
      }
    ]
  }
  public getPessoas(){
    return this.pessoas;
  }
  
  delete(person: Person){
    this.pessoas = this.pessoas.filter(p => p.id !== person.id );
    console.log(this.pessoas);
  }
}
