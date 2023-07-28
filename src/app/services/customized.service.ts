import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { CustomizedModel } from '../models/customized.model';


@Injectable()
export class CustomizedService {

  constructor(private http: HttpClient, private _authHeader: authHeader) { }

  customized: CustomizedModel[] = []

  async getHistoryCustomized() {
    this.customized = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/customize/getAllCustomizeByUserId`, httpOptions)
  }
  async getAllCustomized() {
    this.customized = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/customize/community`, httpOptions)
  }
  async getRandom(id: string, type: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/customize/random/${id}?type=${type}`, httpOptions)
  }
  async saveCustomizedFromCommunity(id: string) {
    let data = {
      customId: id
    }
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.post(`http://localhost:3030/customize/copyCustomize`, data, httpOptions)
  }
  async shareCustomized(id: string) {
    let data = {
      id: id
    }
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.post(`http://localhost:3030/customize/share`, data, httpOptions)
  }
  async getCustomizeByid(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()

    }
    return this.http.get<any>(
      `http://localhost:3030/customize/getCustomizeById/${id}`, httpOptions,
    )
  }
  async deleteCustomized(id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.delete(
      `http://localhost:3030/customize/delete/${id}`, httpOptions
    )
  }
  async editCustomized(data: any, id: string) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.put(
      `http://localhost:3030/customize/update/${id}`, data, httpOptions
    )
  }
  getTotalPrice(data: any) {
    return data.case.price + data.cpu.price + data.gpu.price + data.motherBoard.price + data.powerSupply.price + data.ram.price + data.storage.price
  }
}
