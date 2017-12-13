import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class PetService {
    pets = new BehaviorSubject([]);
    
    constructor(private _http: HttpClient) {
        this.getPets((data) => {
           this.pets.next(data); 
        });
    }

    createPet(pet) {
        this._http.post('/pets', pet).subscribe((res) => {
            this.getPets((data) => {
               this.pets.next(data); 
            });
            //return res;
        })    
        
    }
    
    getPets(callback) {
        this._http.get('/pets').subscribe((data) => {
            callback(data);
        })  
    }
    
    addLike(id) {
        this._http.get('/pets/' + id + '/addLike').subscribe((data) => {
            console.log("added like!");
            this.getPets((data) => {
                this.pets.next(data);
            });
        })
    }
}
