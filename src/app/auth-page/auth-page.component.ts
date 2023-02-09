import {
  Component,
  OnInit,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, MaxValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SigninModel } from '../models/signIn.model';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {

  ngOnInit(): void {
  
  }

  form: UntypedFormGroup

  constructor(private _router : Router, private _fb:FormBuilder, private _authService : AuthService) {
    this.form = _fb.group({
      email : new FormControl('test@gmail.com', Validators.required),
      password : new FormControl('kloybjarj', Validators.required)
    })
  }

  @ViewChild('container') container: ElementRef;

  async signIn() {
    await this._authService.signin(new SigninModel(this.form.value.email, this.form.value.password)).toPromise().then((res: any) => {
      console.log('login successfully', res)
      if(res['data'].role==="USER"){
        this._router.navigate(['/homepage'])
      }
    })
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  signUp() {
    this.container.nativeElement.classList.add('right-panel-active');
  }
}
