import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class authHeader {
  constructor(

  ) { }
  authheader(): HttpHeaders {
    // let user = this.localStore.getData(key);
    // if (user && user.token) {
    //   return new HttpHeaders({Authorization: 'Bearer ' + user.token , 'Content-Type' : 'application/json'}) ;
    // } else {
    // // when loggin in
    //   return  new HttpHeaders({'Content-Type' : 'application/json'}) ;
    // }
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization:
        'Bearer ' +
        token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Origin': '*',
    });
  }
}
