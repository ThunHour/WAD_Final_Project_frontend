import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { RamModel } from '../models/ram.model';


@Injectable()
export class RamService {
  constructor(private http: HttpClient, private _authHeader: authHeader,
  ) { }

  rams: RamModel[] = []

  async getAllRams() {
    this.rams = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/ram/getAllRam`, httpOptions)


  }
  async getRamById(id:string){
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get(`http://localhost:3030/ram/getRamById/${id}`, httpOptions)
  }
}
