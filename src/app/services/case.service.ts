import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { CaseModel } from '../models/case.model';

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  cases: CaseModel[] = []

  async getAllCases() {
    this.cases = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get('http://localhost:3000/case/getAllCase', httpOptions)


  }
}
