import {FormArray, FormControl} from '@angular/forms';

export type RegisterFormModel = {
  username: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
  phone: FormControl<string>;
  addresses: FormArray<FormControl<string>>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export type LoginFormModel = {
  email: FormControl<string>;
  password: FormControl<string>;
}

