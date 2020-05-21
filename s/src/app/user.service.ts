import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

    isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('')
  }

  
}
