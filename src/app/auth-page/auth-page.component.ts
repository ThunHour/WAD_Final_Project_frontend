import {
  Component,
  OnInit,
  ElementRef,
  VERSION,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MaxValidator,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceFromServer } from '../services/auth.service';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';
import { SigninModel } from '../models/signIn.model';
import { SignupModel } from '../models/signUp.model';
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {


  formGroup: FormGroup;
  formGroup1: FormGroup;
  user: SocialUser;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthServiceFromServer,
  ) { }
  ngOnInit(): void {
    this.initForm();
    this.initForm1();
    if (localStorage.getItem('token')) {
      this._router.navigate(['/homepage']);
    }

  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  initForm1() {
    this.formGroup1 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phonenumber: new FormControl('', [Validators.required]),
    });
  }

  @ViewChild('container') container: ElementRef;

  async signIn() {
    if (this.formGroup.valid) {
      await this._authService
        .signin(
          new SigninModel(
            this.formGroup.value.email,
            this.formGroup.value.password
          )
        )
        .toPromise()
        .then((res: any) => {
          console.log('login successfully', res);
          if (res['data'].role === 'USER') {
            localStorage.setItem('token', res.accessToken);
            this._router.navigate(['/homepage']);
          }
        });
    } else {
      console.log('wrong');
    }

    this.container.nativeElement.classList.remove('right-panel-active');
  }

  async signUp() {
    if (this.formGroup1.valid) {
      this._authService
        .signUp(
          new SignupModel(
            this.formGroup1.value.email,
            this.formGroup1.value.name,
            this.formGroup1.value.phonenumber,
            this.formGroup1.value.password
          )
        )
        .toPromise().then(
          (res: any) => {
            try {
              if (res['data'].role === 'USER') {
                console.log('signup successfully', res);

                window.location.reload();
              }
            } catch (error) {
              console.log("User already exist");
            }
          }
        )

    }
    this.container.nativeElement.classList.add('right-panel-active');
  }
  facebook() {
    return this._authService.facebook();
  }
}
