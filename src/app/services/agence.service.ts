import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }

  getListAgences() {

    return this.http.get<any>('https://openbank.stb.com.tn/entreeEnRelation/GetAgences', {
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'content-type': 'application/json'
        }),
        observe: 'response',
        reportProgress: true
    }).pipe(
        timeout(30000),
        retry(3)
    );
}
}
