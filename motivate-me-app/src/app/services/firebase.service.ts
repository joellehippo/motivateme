import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root',
})
export class FirebaseService {

    constructor(public db: AngularFirestore) { }


    createUser() {
        return this.db.collection('quotes').add({
            name: "something"
        });
    }

    getAvatars() {
        return this.db.collection('/quotes').valueChanges()
    }
}
