import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../../environments/environment';
import { User } from '@core/models/user';
import { Employe } from '@core/models/employe';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    private http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUserManali')));
    this.currentUser = this.currentUserSubject.asObservable();

   }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  loginUser(user) {
    const headerss = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.apiURL}/dashboard/autenticacionUsuario`, JSON.stringify(user), { headers: headerss })
      .pipe(map( user => {
        return user;
      }));
  }

  loginEmploye(employe) {
    const headerss = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${environment.apiURL}/dashboard/autenticacionEmpleado`, JSON.stringify(employe), { headers: headerss })
      .pipe(map( user => {
        return user;
      }));
  }

  isLogin(idUser) {
    this.currentUserSubject.next(idUser);
    console.log(idUser);
  }
}
