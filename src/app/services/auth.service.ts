import { SignupModel } from './../models/signUp.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { SigninModel } from '../models/signIn.model';
import { authHeader } from './auth-header.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceFromServer {

  constructor(private http : HttpClient, private _router : Router, private httpHeader:authHeader ){}

  signin(signinModel : SigninModel){
    let httpOptions = {
      headers :this.httpHeader.authheader(),
      body : null,
      param : null,
    }
    return this.http.post('http://localhost:3000/auth/login',{email: signinModel.email, password : signinModel.password}, httpOptions)
  }

  signUp(signupModel: SignupModel) {
    let httpOptions = {
      headers :this.httpHeader.authheader(),
      body : null,
      param : null,
    }
    return this.http.post('http://localhost:3000/auth/signup', {email: signupModel.email, name: signupModel.name, password: signupModel.password, phonenumber: signupModel.phonenumber}, httpOptions)
  }

  facebook() {
    return this.http.get('http://localhost:3000/google')
  }
}
