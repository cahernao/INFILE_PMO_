import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  isAuth():boolean{
    const token = sessionStorage.getItem('token');

    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const expirationDate = new Date(decodedToken.exp * 1000);
      const isExpired = expirationDate.getTime() <= new Date().getTime();

      return !isExpired;
    } catch {
      return false;
    }
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
