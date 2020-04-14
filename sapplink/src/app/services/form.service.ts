import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  static markFormAsDirty(form: FormGroup | FormArray, updateValue: boolean) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormGroup;
      if (control) {
        if (control.controls) {
          this.markFormAsDirty(control, updateValue);
        } else {
          control.markAsTouched({onlySelf: false});
          control.markAsDirty({onlySelf: false});
        }
        if (updateValue) {
          control.updateValueAndValidity();
        }
      }
    })
  }
}
