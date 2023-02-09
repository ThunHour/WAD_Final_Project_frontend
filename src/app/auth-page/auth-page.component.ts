import {
  Component,
  OnInit,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('container') container: ElementRef;

  signIn() {
    this._router.navigate(['/homepage']);
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }
}
