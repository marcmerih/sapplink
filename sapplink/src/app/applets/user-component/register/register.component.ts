import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class RegisterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() shouldRegister: boolean;

  @Output() requestToSwitchForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private formService: FormService) { }

  ngOnInit(): void {
  }
  
  requestLogin() {
    // false emit means user wants to login
    this.requestToSwitchForm.emit(false);
  }

  clickRegister() {
    if (this.formGroup.invalid) {
      this.formService.markFormAsDirty(this.formGroup, false);
    }
  }

  hasError(form: FormGroup, field: string): boolean {
    return this.formService.hasError(form, field);
  }

}
