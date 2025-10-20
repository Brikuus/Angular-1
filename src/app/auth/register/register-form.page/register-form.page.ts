import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import {RegisterFormModel} from '../../models/profile-form.model';



@Component({
  selector: 'app-profile-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss']
})

export default class ProfileForm {
  protected fb = inject(NonNullableFormBuilder);

  addresse = this.fb.array([
    this.fb.control('', Validators.required)
  ]);

  registerForm: FormGroup<RegisterFormModel> = this.fb.group({
    username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    age: this.fb.control(18, [Validators.required, Validators.min(16)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', [Validators.pattern(/^0[0-9]{9}$/)]), // Numéro FR
    addresses:  this.addresse,
    password: this.fb.control('', [Validators.required, Validators.minLength(6), Validators.pattern(/[0-9A-Za-z]*/)]),
    confirmPassword: this.fb.control('',[Validators.required, Validators.minLength(6), Validators.pattern(/[0-9A-Za-z]*/)])
  });

  setKey() {
    localStorage.setItem('accessKey', 'iLoveSalmon');
  }
  getKey() {
    return localStorage.getItem('accessKey');
  }

  deco() {
    localStorage.removeItem('accessKey');
  }

}
