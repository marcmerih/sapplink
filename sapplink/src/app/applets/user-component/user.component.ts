import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service/user.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userShouldLogin = true;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private userService: UserService, private dialog: MatDialog) { 
    this.loginForm = this.userService.getLoginForm();
    this.registerForm = this.userService.getRegisterForm();
  }

  ngOnInit(): void {
  }

  openRegisterPopup() {
    this.loginForm.reset();
    this.dialog.open(RegisterComponent, {
      autoFocus: false,
      height: '45vh',
      width: '50vw',
      data: this.registerForm
    }).afterClosed().subscribe(() => {
      this.registerForm.reset();
      // TO-DO: Session stuff?
    })
  }
}
