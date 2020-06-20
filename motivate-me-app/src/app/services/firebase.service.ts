import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {

    constructor(public db: AngularFirestore) { }


    addQuote(quote: any, person: any) {

        const createDt = Date.now();
        console.log("quote: " + quote);
        console.log("person: " + person);
        console.log("createDt: " + createDt);

        return this.db.collection('quotes').add({
            quote: quote,
            person: person,
            createDt: createDt
        });
    }

    getAvatars() {
        return this.db.collection('/quotes').valueChanges()
    }
}
