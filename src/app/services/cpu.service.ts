import { CpuModel } from './../models/cpu.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';

@Injectable({
  providedIn: 'root'
})
export class CpuService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  cpus: CpuModel[] = []

  async getAllCpus() {
    this.cpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get('http://localhost:3000/cpu/getAllCpu', httpOptions)


  }
}
