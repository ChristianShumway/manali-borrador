import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const ValidarQueSeanIguales: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  // console.log(control);
  const password = control.get('contrasena');
  const confirmarPassword = control.get('confirmarContrasena');

  return password.value === confirmarPassword.value ? null : { 'noSonIguales': true };
};
