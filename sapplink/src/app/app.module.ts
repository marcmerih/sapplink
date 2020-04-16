import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './applets/user-component/user.component';
import { LoginComponent } from './applets/user-component/login/login.component';
import { RegisterComponent } from './applets/user-component/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IndexComponent } from './applets/index/index/index.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './applets/navigation/navigation.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: UserComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  entryComponents: [
    RegisterComponent
  ],
  providers: [
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
