
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

class Book {
  constructor(public title) { }
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  
  items: Array<any>;
  
  constructor(private firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.firebaseService.getAvatars()
     .subscribe(result => {
       this.items = result;
     })
   }


  public AddBook(): void {
    console.log("clicked!");
    this.firebaseService.createUser();
  }

}
