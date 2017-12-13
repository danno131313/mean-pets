import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pet = {
    name: '',
    age: ''
  }
  
  pets = [];

  constructor(private _petService: PetService, private _router: Router, private _userService: UserService) {
  }

  ngOnInit() {
    
    this._petService.pets.subscribe((data) => {
      this.pets = data;
    });
    
    
  }
  
  onSubmit() {
    console.log("creating pet");
    
    this._petService.createPet(this.pet);
    
    this.pet =  {
      name: '',
      age: ''
    }
    
  }
  
  newLike(id) {
    this._petService.addLike(id);
    
   
  }

}
