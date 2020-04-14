import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() shouldLogin: boolean;

  @Output() requestToSwitchForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  
  requestRegister() {
    // true emit means user wants to register.
    this.requestToSwitchForm.emit(true);
  }

}
