import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { Local } from './local.enum';
import { Porte } from './porte.enum';
import { Sexo } from './sexo.enum';
import { Tipo } from './tipo.enum';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animal: Animal[];

  constructor() {
    this.animal = [
      {
        id: 1,
        nome: "Pet",
        tipo: Tipo.CACHORRO,
        local: Local.DOMESTICO,
        porte: Porte.MEDIO,
        sexo: Sexo.MASCULINO
      }
    ]
  }
  public getAnimals(){
    return this.animal;
  }
  
  delete(animal: Animal){
    this.animal = this.animal.filter(p => p.id !== animal.id );
  }

  salvar(animal: Animal){
   const index = this.animal.findIndex(p => p.id ===animal.id)
   if(index === -1){
    this.animal.push(animal);
   } else {
     this.animal[index] = {...animal}
   }
  }

  getId(){
    return this.animal.length + 1;
  }
  getAnimal(id: number): Animal{
    return this.animal.find(p => p.id === id);
  }
}
