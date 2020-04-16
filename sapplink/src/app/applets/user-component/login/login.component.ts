import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoginComponent implements OnInit {

  @Input() formGroup: FormGroup;

  constructor(private formService: FormService) { }

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
