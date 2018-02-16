import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

export const firebaseConfig = environment.firebaseConfig;
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
