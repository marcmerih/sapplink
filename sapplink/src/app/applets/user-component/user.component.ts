import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userShouldLogin = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  constructor(private userService: UserService) { 
    this.loginForm = this.userService.getLoginForm();
    this.registerForm = this.userService.getRegisterForm();
  }

  ngOnInit(): void {
  }

  submit() {
  }

  get loginOrRegister() {
    return (this.userShouldLogin) ? 'Login' : 'Register';
  }

  requestLogin(bool: boolean) {
    this.userShouldLogin = bool;
  }

}
