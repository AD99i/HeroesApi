import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  isAuthenticated(){
    return false;
  }
}
