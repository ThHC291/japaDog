import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';
import { Local } from '../shared/local.enum';
import { Porte } from '../shared/porte.enum';
import { Sexo } from '../shared/sexo.enum';
import { Tipo } from '../shared/tipo.enum';

@Component({
  selector: 'app-animal-register',
  templateUrl: './animal-register.page.html',
  styleUrls: ['./animal-register.page.scss'],
})
export class AnimalRegisterPage implements OnInit {

  tipos = Object.keys(Tipo).map((key) => ({ valor: key, descricao: Tipo[key]}));
  locais = Object.keys(Local).map((key) => ({ valor: key, descricao: Local[key]}));
  portes = Object.keys(Porte).map((key) => ({ valor: key, descricao: Porte[key]}));
  sexos = Object.keys(Sexo).map((key) => ({ valor: key, descricao: Sexo[key]}));
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.animal = new Animal();
      this.animal.id = this.animalService.getId();
      const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));           
      
      if(codigo){
        this.animal = this.animalService.getAnimal(codigo);
      }
    }

  ngOnInit() {
  }

  salvar(){
    this.animalService.salvar(this.animal);
    this.router.navigate(["animal-list"])
  }

}
