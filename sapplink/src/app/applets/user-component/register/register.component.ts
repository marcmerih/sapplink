import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../user-service/user.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RegisterComponent {
  formGroup: FormGroup;
  initialRollout: boolean;

  constructor(private formService: FormService, 
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
      private appService: AppService) { 
      this.initialRollout = appService.isInitialRollout;
      this.formGroup = data;
  }
  
  clickRegister() {
    if (this.formGroup.invalid) {
      this.formService.markFormAsDirty(this.formGroup, false);
    }
  }

  hasError(form: FormGroup, field: string): boolean {
    return this.formService.hasError(form, field);
  }

  passwordsDontMatch(password: string, confirmPassword: string) {
    return this.userService.passwordsDontMatch(password, confirmPassword) && this.formGroup.get('confirmPassword').touched;
  }
}
