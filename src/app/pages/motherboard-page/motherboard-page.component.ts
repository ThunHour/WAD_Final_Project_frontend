import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-motherboard-page',
  templateUrl: './motherboard-page.component.html',
  styleUrls: ['./motherboard-page.component.scss']
})
export class MotherboardPageComponent implements OnInit {

  listBrands : any = []

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    }),
    console.log()
  }

  name = 'Angular';
  private stepper!: Stepper;

  constructor(private _router: Router) {
  }

  onNext() {
    this.stepper.next();
    return false
  }





  onBackHome() {
  }

}
