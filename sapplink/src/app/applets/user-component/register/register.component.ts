import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() shouldRegister: boolean;

  @Output() requestToSwitchForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  
  requestLogin() {
    // false emit means user wants to login
    this.requestToSwitchForm.emit(false);
  }

}
