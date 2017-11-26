import { Component } from '@angular/core';
import { AuthService, ApiService } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  isLogged: boolean;

  constructor(
    authService: AuthService,
    apiService: ApiService,
    private router: Router
  ) {
    this.isLogged = authService.isLogged();
    if (!this.isLogged) {
        this.router.navigate(['login']);
    }

    authService.authEventEmitter.subscribe(status => {
      this.isLogged = status;
    });
  }

}
