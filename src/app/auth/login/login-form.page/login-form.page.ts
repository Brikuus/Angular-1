import { Component, inject } from '@angular/core';
import {FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {LoginFormModel} from '../../models/profile-form.model';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.page.html',
  styleUrl: './login-form.page.scss'
})

export default class LoginFormPage {
  protected fbb = inject(NonNullableFormBuilder);

  loginForm: FormGroup<LoginFormModel> = this.fbb.group({
    email: this.fbb.control('', [Validators.required, Validators.email]),
    password: this.fbb.control('', [Validators.required, Validators.minLength(6), Validators.pattern(/[0-9A-Za-z]*/)])
  });
}
