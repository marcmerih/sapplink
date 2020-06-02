import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {

  @Input() formGroup: FormGroup;
  initialRollout: boolean;

  constructor(private formService: FormService,
    private appService: AppService) { 
    this.initialRollout = appService.isInitialRollout;
  }

  ngOnInit(): void {
  }

  clickLogin() {
    if (this.formGroup.invalid) {
      this.formService.markFormAsDirty(this.formGroup, false);
    }
  }

  hasError(form: FormGroup, field: string): boolean {
    return this.formService.hasError(form, field);
  }
}
