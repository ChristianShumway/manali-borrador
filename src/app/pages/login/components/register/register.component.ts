import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('signInButton') submitButton;
  form: FormGroup;
  loading: boolean = false;
  toggleEye: boolean = true;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  
  ngOnInit(): void {
    this.getValidations();
  }
  
  getValidations() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      email: ['',[ Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
	}

  createCount() {
    if(this.form.valid) {
      console.log(this.form.value);
      this.submitButton.nativeElement.disabled = true;
      this.loading = true;
      // const valor = this.authService.signin();
      // console.log(valor);
      setTimeout( ()=> {
        this.submitButton.nativeElement.disabled = false;
        this.loading = false;
      }, 3000);
    }
  }

  get nameField() {
    return this.form.get('nombre');
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('contrasena');
  }

}
