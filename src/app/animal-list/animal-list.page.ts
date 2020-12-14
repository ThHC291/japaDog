import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../shared/animal';
import { AnimalService } from '../shared/animal.service';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.page.html',
  styleUrls: ['./animal-list.page.scss'],
})
export class AnimalListPage implements OnInit {

  listOfAnimals: Animal[];

  constructor(
    private animalService: AnimalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listar();
  }

  listar(){
    this.listOfAnimals =  this.animalService.getAnimals();
  }

  edit(animal: Animal){
    this.router.navigate(["animal-register", animal.id]);
  }
  delete(animal: Animal){
    this.animalService.delete(animal);
    this.listar();
  }

}
