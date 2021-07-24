import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@core/models/user';
import { AuthService } from '@core/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

      this.authService.loginUser(this.signinForm.value)
      .pipe(first())
      .subscribe( 
        result => {
          const user: User = result.response;
          console.log(user);
          if (result.noEstatus === 5) {
            localStorage.setItem('currentUserManali', JSON.stringify(user.idUsuario));
            localStorage.setItem('typeUser', JSON.stringify(2));
            this.authService.isLogin(user.idUsuario);
            this.useAlerts('Acceso de usuario correcto', ' ', 'success-dialog');
            this.existeUsuario = true;
            this.router.navigateByUrl('/admin');
          } else {
            this.useAlerts('Usuario no encontrado', ' ', 'error-dialog');
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
