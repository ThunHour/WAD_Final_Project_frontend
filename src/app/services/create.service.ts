import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { authHeader } from './auth-header.service';
import { MotherBoardModel } from '../models/motherboard.model';


@Injectable()
export class CreateService {

  constructor(private http: HttpClient, private _authHeader: authHeader,

  ) { }

  motherBoards: MotherBoardModel[] = []
  motherBoard: any
  async getAllMotherBoards() {
    this.motherBoards = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/motherBoard/getAllMotherBoard`, httpOptions)
  }

  async getMotherBoardById(id: string) {
    this.motherBoard = []
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.get(`http://localhost:3030/motherboard/getMotherBoardById/` + id, httpOptions)
  }

  async createCustomized(pc: any) {
    let httpOptions = {
      headers: this._authHeader.authheader()
    }
    return this.http.post(`http://localhost:3030/customize/create`, pc, httpOptions)
  }

}
