import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password-admin.component.html',
  styleUrls: ['./forgot-password-admin.component.css']
})
export class ForgotPasswordAdminComponent implements OnInit {

  @ViewChild('button') submitButton;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
    });
  }

  restorePassword() {
    this.submitButton.nativeElement.disabled = true;
    this.loading = true;
    if(this.form.valid) {
      const email = this.form.value;
      this.authService.restorePasswordEmploye(email).subscribe(
        response => {
          console.log(response);
          if(response.noEstatus === 5) {
            this.useAlerts(response.mensaje, ' ', 'success-dialog');
            this.router.navigateByUrl('/login/admin');
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

  get emailField() {
    return this.form.get('email');
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
