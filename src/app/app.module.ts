import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './routes/app-routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjaxSvcsService } from './ajax-svcs.service';
import { LoginRegistrationComponent } from './components/login-registration/login-registration/login-registration.component';



@NgModule ({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    LoginRegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  AppRoutes
  ],
  providers: [AjaxSvcsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
