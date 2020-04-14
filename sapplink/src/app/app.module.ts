import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  BrowserAnimationsModule
} from '../../../node_modules/angular-material';
import { AppComponent } from './app.component';
import { UserComponent } from './applets/user-component/user.component';
import { LoginComponent } from './applets/user-component/login/login.component';
import { RegisterComponent } from './applets/user-component/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
