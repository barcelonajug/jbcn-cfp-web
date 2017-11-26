import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ApiService, AuthService } from '../services/services';

// Pages
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';

// Components
import { HeaderComponent } from '../components/header/header.component';
import { SideMenuComponent } from '../components/menu/side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [HeaderComponent, SideMenuComponent]
})
export class AppModule { }
