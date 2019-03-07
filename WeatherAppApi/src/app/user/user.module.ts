import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    NgxAuthFirebaseUIModule

  ],
  declarations: [LoginComponent, ProfileComponent]
})
export class UserModule { }
