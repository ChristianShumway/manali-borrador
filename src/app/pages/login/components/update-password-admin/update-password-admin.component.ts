import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '@core/services/auth.service';
import { ValidarQueSeanIguales } from './../../../../utils/validators';
import { Employe } from '@core/models/employe';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password-admin.component.html',
  styleUrls: ['./update-password-admin.component.css']
})
export class UpdatePasswordAdminComponent implements OnInit {

  @ViewChild('button') submitButton;
  form: FormGroup;
  returnUrl: string;
  loading: boolean = false;
  toggleEye: boolean = true;
  toggleEyeConfirm: boolean = true;
  employe: Employe;
  today = new Date();
  pipe = new DatePipe('en-US');


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.employe = JSON.parse(localStorage.getItem('TemporalEmployeManali'));
    this.getValidations();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getValidations() {
    this.form = this.fb.group({
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', [Validators.required, Validators.minLength(6)]],
    }, {
      validators: ValidarQueSeanIguales
    });
  }

  toggleEyeIcon(inputPassword:any) {
		this.toggleEye = !this.toggleEye;
		inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password';
	}

  toggleEyeIconConfirm(inputPasswordConfirm:any) {
		this.toggleEyeConfirm = !this.toggleEyeConfirm;
		inputPasswordConfirm.type = inputPasswordConfirm.type === 'password' ? 'text' : 'password';
	}

  checarSiSonIguales(): boolean {
    return this.form.hasError('noSonIguales') &&
      this.form.get('contrasena').dirty &&
      this.form.get('confirmarContrasena').dirty;
  }

  updatePassword() {
    if(this.form.valid) {
      const password = this.form.value.contrasena;
      this.submitButton.nativeElement.disabled = true;
      this.loading = true;
      const format = 'yyyy-MM-dd';

      const employe = {
        ...this.employe,
        fechaCreacion: this.pipe.transform(this.today, format),
        contrasena: password
      };

      console.log(employe);

      this.authService.updatePasswordEmploye(employe).subscribe(
        response => {
          console.log(response);
          if (response.noEstatus === 5){
            this.router.navigateByUrl('/login/admin');
            this.useAlerts(response.mensaje, ' ', 'success-dialog');
            localStorage.removeItem('TemporalEmployeManali');
          }
          else {
            this.useAlerts(response.mensaje, ' ', 'error-dialog');
            this.submitButton.nativeElement.disabled = false;
            this.loading = false;
          }
        },
        error => {
          console.error(error);
          this.useAlerts('Error del sistema, favor de reportar al administrador', ' ', 'error-dialog');
          this.submitButton.nativeElement.disabled = false;
          this.loading = false;
        }
      );
    }
  }

  get passwordField() {
    return this.form.get('contrasena');
  }

  get checkPasswordField() {
    return this.form.get('confirmarContrasena');
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
