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

  salvar(person: Person){
   const index = this.pessoas.findIndex(p => p.id ===person.id)
   if(index === -1){
    this.pessoas.push(person);
   } else {
     this.pessoas[index] = {...person}
   }
   
   console.log(this.pessoas);
  }

  getId(){
    return this.pessoas.length + 1;
  }
  getPerson(codigo: number): Person{
    return this.pessoas.find(p => p.id === codigo);
  }
}
