import { StorageModel } from './../models/storage.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';


@Injectable()
export class StorageService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  storages: StorageModel[] = []

  async getAllStorages() {
    this.storages = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/storage/getAllStorage`, httpOptions)


  }
  async getStorageById(id:string){
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return  this.http.get(`http://localhost:3030/storage/getStorageById/${id}`, httpOptions)
  }
}
