import { Injectable } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

@Injectable({
  providedIn: 'root'
})

export class UserService {

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor() {
  }

  getLoginForm() {
    return fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  getRegisterForm() {
    return fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      emailVerification: ['', [Validators.required]],
      uid: ['']
    })
  }
}
