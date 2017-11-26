import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/services';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    isLogged = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.isLogged = this.authService.isLogged();
    }

    ngOnInit() { }

    logout() {
        console.log('Doing logout');
        this.authService.logout();
        this.isLogged = false;
        this.router.navigate(['login']);
    }
}
