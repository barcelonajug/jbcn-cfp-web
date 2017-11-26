import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/services';

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    styles: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        if (authService.isLogged()) {
            this.router.navigate(['']);
        }
    }

    ngOnInit() { }

    doLogin() {
        this.authService.login(this.username, this.password).then(() => {
            this.router.navigate(['']);
        }, error => {
            alert(error);
        });
    }


}
