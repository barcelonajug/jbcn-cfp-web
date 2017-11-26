import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment';
import { ApiService } from './api.service';
const TOKEN_FIELD = 'token';

@Injectable()
export class AuthService {

    public authEventEmitter = new EventEmitter<boolean>();

    constructor(private apiService: ApiService) { }

    getCurrentToken() {
        return sessionStorage.getItem(TOKEN_FIELD);
    }

    isLogged() {
        return sessionStorage.getItem(TOKEN_FIELD) != null;
    }

    putCurrentToken(token: string) {
        sessionStorage.setItem(TOKEN_FIELD, token);
    }

    clearCurrentToken() {
        sessionStorage.removeItem(TOKEN_FIELD);
    }

    login(username: string, password: string): Promise<string> {
        const params = {
            'username': username,
            'password': password
        };
        return new Promise<string>((resolve, reject) => {
            this.apiService.doPost(environment.loginUrl, null, params).subscribe(response => {
                if (response['status']) {
                    const token = response['data']['token'];
                    this.putCurrentToken(token);
                    resolve(token);
                    this.authEventEmitter.emit(true);
                } else {
                    reject(response['error']);
                }
            }, error => {
                console.error('Error in login', error);
                reject(error);
            });

        });
    }

    logout() {
        const token = this.getCurrentToken();
        this.apiService.doGet(environment.logoutUrl, token).subscribe(response => {
            console.log('logout: ', response);
        }, error => {
            console.error('logout error:', error);
        });
        this.clearCurrentToken();
        this.authEventEmitter.emit(false);
    }

}
