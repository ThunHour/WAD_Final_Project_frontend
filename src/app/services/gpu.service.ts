import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { GpuModel } from '../models/gpu.model';

@Injectable({
  providedIn: 'root'
})
export class GpuService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  gpus: GpuModel[] = []

  async getAllGpus() {
    this.gpus = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get('http://localhost:3000/gpu/getAllGpu', httpOptions)


  }
}
