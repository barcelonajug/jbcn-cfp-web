import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/services';

@Component({
    selector: 'app-home-page',
    templateUrl: 'home.component.html',
    styles: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() { }

}
