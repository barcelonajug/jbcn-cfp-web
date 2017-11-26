import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    constructor(private http: Http) {

    }

    doGet(url: string, token: string): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ${token}');
        }
        const options: RequestOptions = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.get(url, options).map(response => response.json());
    }

    doDelete(url: string, token: string): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ${token}');
        }
        const options: RequestOptions = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.delete(url, options).map(response => response.json());
    }

    doPost(url: string, token: string, payload: any): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ${token}');
        }
        const options: RequestOptions = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(url, payload, options).map(response => response.json());
    }

    doPut(url: string, token: string,  payload: any): Observable<any> {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (token) {
            headers.append('Authorization', 'Bearer ${token}');
        }
        const options: RequestOptions = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.put(url, payload, options).map(response => response.json());
    }

}
