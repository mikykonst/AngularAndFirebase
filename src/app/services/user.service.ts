import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    this.users = this.afs.collection('users').valueChanges();
  }

  getUsers() {
    return this.users;
  }

}
