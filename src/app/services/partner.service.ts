import { Injectable } from '@angular/core';
import { authHeader } from "./auth-header.service";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PartnerService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }



  async getAllPartner() {

    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:4040`, httpOptions)
  }
}


