import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {

    constructor(public db: AngularFirestore) { }


    addQuote(quote: any, person: any) {
        
        const createDt = Date.now();
        console.log("print: " + quote);

        return this.db.collection('quotes').add({
            quote: "test",
            createDt: createDt
            // person: person,
            // createDt: ""
        });
    }

    getAvatars() {
        return this.db.collection('/quotes').valueChanges()
    }
}
