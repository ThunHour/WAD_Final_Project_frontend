import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { CustomizedModel } from '../models/customized.model';

@Injectable({
  providedIn: 'root'
})
export class CustomizedService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  customized: CustomizedModel[] = []

  async getAllCustomized() {
    this.customized = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get('http://localhost:3000/customize/getAllCustomize', httpOptions)


  }


}
