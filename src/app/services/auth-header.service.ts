import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class authHeader {
  constructor() {}
  authheader(): HttpHeaders {
    // let user = this.localStore.getData(key);
    // if (user && user.token) {
    //   return new HttpHeaders({Authorization: 'Bearer ' + user.token , 'Content-Type' : 'application/json'}) ;
    // } else {
      // when loggin in
    //   return  new HttpHeaders({'Content-Type' : 'application/json'}) ;
    // }

    return new HttpHeaders({
      Authorization:
        'Bearer ' +
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkWW1DTG5DcmhDUDczWTh0bDZleXdiZXpydENESk5vMG1pcm5sUGVmWmpES0hoYWhOL0c4clciLCJpZCI6Ijk2N2Y0OTllLWRlZmItNGRlYS05YzY3LTI5YzI2ZWY1YjQ4NyIsImlhdCI6MTY3NTk1MDAwNiwiZXhwIjoxNjc2MDM2NDA2fQ.FKZWmmLTL9yNH3ly5gLFLA-c9sNZsFnJW2bXP9LH39w',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    });
  }
}