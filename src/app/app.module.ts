import { AuthGuardGuard } from './services/guards/auth-guard.guard';
import { CustomizedService } from './services/customized.service';
import { DisplayAllService } from './services/display-all.service';
import { CpuService } from './services/cpu.service';
import { RamService } from './services/ram.service';
import { StorageService } from './services/storage.service';
import { PowersupplyService } from './services/powersupply.service';
import { GpuService } from './services/gpu.service';
import { MotherboardService } from './services/motherboard.service';
import { authHeader } from './services/auth-header.service';
import { AuthServiceFromServer } from './services/auth.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MotherboardPageComponent } from './pages/motherboard-page/motherboard-page.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DisplayAllComponent } from './pages/display-all/display-all.component';
import { DisplayRamComponent } from './pages/display-ram/display-ram.component';
import { DisplayMotherBoardComponent } from './pages/display-mother-board/display-mother-board.component';
import { DisplayCaseComponent } from './pages/display-case/display-case.component';
import { DisplayGPUComponent } from './pages/display-gpu/display-gpu.component';
import { DisplayPowerSupplyComponent } from './pages/display-power-supply/display-power-supply.component';
import { DisplayStorageComponent } from './pages/display-storage/display-storage.component';
import { DisplayCPUComponent } from './pages/display-cpu/display-cpu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CaseService } from './services/case.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HistoryComponent } from './pages/history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuardGuard] },
  { path: 'motherboard', component: MotherboardPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'component', component: ComponentPageComponent, canActivate: [AuthGuardGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [AuthGuardGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    MotherboardPageComponent,
    ComponentPageComponent,
    DisplayAllComponent,
    DisplayRamComponent,
    DisplayMotherBoardComponent,
    DisplayCaseComponent,
    DisplayGPUComponent,
    DisplayPowerSupplyComponent,
    DisplayStorageComponent,
    DisplayCPUComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    TabViewModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    authHeader,
    AuthServiceFromServer,
    MotherboardService,
    CaseService,
    GpuService,
    PowersupplyService,
    StorageService,
    RamService,
    CpuService,
    DisplayAllService,
    CustomizedService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
