import { Employe } from '@core/models/employe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@core/services/auth.service';
import { User } from '@core/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {
  @ViewChild('signInButton') submitButton;
  form: FormGroup;
  loading: boolean = false;
  toggleEye: boolean = true;
  today = new Date();
  pipe = new DatePipe('en-US');

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  
  ngOnInit(): void {
    this.getValidations();
  }
  
  getValidations() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', []],
      apellidoMaterno: ['', []],
      email: ['',[ Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      telefono: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
	}

  createCount() {
    if(this.form.valid) {
      this.submitButton.nativeElement.disabled = true;
      this.loading = true;
      const format = 'yyyy-MM-dd';
      const empleado: Partial<Employe> = {
        fechaCreacion: this.pipe.transform(this.today, format),
        ...this.form.value
      }

      console.log(empleado);

      this.authService.updateEmploye(empleado).subscribe(
        response => {
          console.log(response);
          if (response.noEstatus === 5) {
            this.router.navigateByUrl('/login/admin');
            this.useAlerts(response.mensaje, ' ', 'success-dialog');
          } else {
            this.useAlerts(response.mensaje, ' ', 'error-dialog');
            this.submitButton.nativeElement.disabled = false;
            this.loading = false;
          }
        },
        error => {
          console.log(error);
          this.useAlerts('Error del sistema, favor de reportar al administrador', ' ', 'error-dialog');
          this.submitButton.nativeElement.disabled = false;
          this.loading = false;
        }
      );
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

  get phoneField() {
    return this.form.get('telefono');
  }

  useAlerts(message, action, className){
    this.snackBar.open(message, action, {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [className]
    });
  }

}
