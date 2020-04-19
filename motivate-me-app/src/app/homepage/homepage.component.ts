
import { Component, Inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
// import {MatDialog} from '@angular/material/dialog';
// import { AddQuoteDialogComponent } from '../add-quote-dialog/add-quote-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  
  items: Array<any>;
  quote: any;
  who: any;

  constructor(private firebaseService: FirebaseService, public dialog: MatDialog) {
    
  }

  ngOnInit() {
    this.firebaseService.getAvatars()
     .subscribe(result => {
       this.items = result;
     })
     
   }

   openDialog(): void {
    const dialogRef = this.dialog.open(AddQuoteDialogComponent, {
      width: '250px',
     
    });

    dialogRef.afterClosed().subscribe(resultQuote => {
      console.log('The dialog was closed');
      console.log(resultQuote);
      this.quote = resultQuote;
      // this.quote = this.data.quote;
      // this.who = resultQuote.who;
      console.log(this.quote);
      // console.log(this.who);
      this.triggerAddQuote();
    });
  }


  public triggerAddQuote(): void {
    console.log("adding to firebase db!");
    this.firebaseService.addQuote(this.quote, this.who);
  }

}

@Component({
  selector: 'app-add-quote-dialog',
  templateUrl: '../add-quote-dialog/add-quote-dialog.component.html',
  styleUrls: ['../add-quote-dialog/add-quote-dialog.component.css']
})


export class AddQuoteDialogComponent {
  quote: any;
  who: any;

   
  constructor(
    public dialogRef: MatDialogRef<AddQuoteDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}




