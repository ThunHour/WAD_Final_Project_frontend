import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MotherboardPageComponent } from './pages/motherboard-page/motherboard-page.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';

const appRoutes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'motherboard', component: MotherboardPageComponent },
  { path: 'component', component: ComponentPageComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    MotherboardPageComponent,
    ComponentPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
