import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from '@core/models/employe';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  @ViewChild('signInButton') submitButton;

  signinForm: FormGroup;
  returnUrl: string;
  existeUsuario: boolean;
  loading: boolean = false;
  toggleEye: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
	}

  signin() {
    if(this.signinForm.valid) {
      console.log(this.signinForm.value);
      this.submitButton.nativeElement.disabled = true;
      this.loading = true;

      this.authService.loginEmploye(this.signinForm.value)
      .pipe(first())
      .subscribe( 
        result => {
          console.log(result);
          const employe: Employe = result.response;
          if (result.noEstatus === 5) {
            if (employe.cambiarContrasena === 0) {
              localStorage.setItem('currentUserManali', JSON.stringify(employe.idEmpleado));
              localStorage.setItem('typeUser', JSON.stringify(1));
              this.authService.isLogin(employe.idEmpleado);
              this.useAlerts(result.mensaje, ' ', 'success-dialog');
              this.existeUsuario = true;
              this.router.navigateByUrl('/admin');
            } else if (employe.cambiarContrasena === 1) {
              this.router.navigateByUrl('/login/admin/actualizar-contrasena');
              localStorage.setItem('TemporalEmployeManali', JSON.stringify(employe));
            }
          } else {
            this.useAlerts(result.mensaje, ' ', 'error-dialog');
            this.submitButton.nativeElement.disabled = false;
            this.loading = false;
          }
        },
        error => {
          console.error(error);
          this.useAlerts('Acceso de usuario incorrecto', ' ', 'error-dialog');
          this.submitButton.nativeElement.disabled = false;
          this.loading = false;
        }

      );
    }
  }

  get emailField() {
    return this.signinForm.get('email');
  }

  get passwordField() {
    return this.signinForm.get('contrasena');
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
