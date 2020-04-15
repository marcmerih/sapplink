import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './applets/user-component/user.component';
import { LoginComponent } from './applets/user-component/login/login.component';
import { RegisterComponent } from './applets/user-component/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IndexComponent } from './applets/index/index/index.component';
import { RouterModule, Routes } from '@angular/router'

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
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
