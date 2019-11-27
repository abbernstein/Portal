import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const serviceUrl = 'http://localhost:8080/';
export class PortalUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class SureServiceService {
  private currentUserSubject: BehaviorSubject<PortalUser>;
  public currentUser: Observable<PortalUser>;

  public get currentUserValue(): PortalUser {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    return this.http.post<any>(`${serviceUrl}/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }


   updateAccount(item) {
    return this.http.post<any>(serviceUrl + 'updateAccount', item, httpOptions);
  }

  deleteAccount(item) {
    return this.http.post<any>( serviceUrl + 'deleteAccount', item, httpOptions);
  }

  insertAccount(item) {
    return this.http.post<any>(serviceUrl + 'insertAccount', item, httpOptions);
  }


  insertAccountGateway(item) {
    return this.http.post<any>(serviceUrl + 'insertAccountGateway', item, httpOptions);
  }

  updateAccountGateway(item) {
    return this.http.post<any>(serviceUrl + 'updateAccountGateway', item, httpOptions);
  }

  deleteAccountGateway(item) {
    return this.http.post<any>(serviceUrl + 'deleteAccountGateway', item, httpOptions);
  }


  insertAccountService(item) {
    return this.http.post<any>(serviceUrl + 'insertAccountService', item, httpOptions);
  }

  insertPortalUser(item) {
    return this.http.post<any>(serviceUrl + 'insertPortalUser', item, httpOptions);
  }

  updatePortalUser(item) {
    return this.http.post<any>(serviceUrl + 'updatePortalUser', item, httpOptions);
  }

  deletePortalUser(item) {
    return this.http.post<any>(serviceUrl + 'deletePortalUser', item, httpOptions);
  }

  updateAccountService(item) {
    return this.http.post<any>(serviceUrl + 'updateAccountService', item, httpOptions);
  }

  deleteAccountService(item) {
    return this.http.post<any>(serviceUrl + 'deleteAccountService', item, httpOptions);
  }

  getPortalUsers(paramters) {
    return this.http
      .post<any>(
        serviceUrl + 'getPortalUsers',
        // 'https://angular-datatables-demo-server.herokuapp.com/',
        paramters, {}
      );
  }

  getAccountServices(paramters, userID) {
     paramters.userID = userID;
     return this.http
        .post<any>(
          serviceUrl + 'getAccountServices',
          // 'https://angular-datatables-demo-server.herokuapp.com/',
          paramters, {}
        );
  }

  getAccountGateWayStatuses(paramters, userID) {
    paramters.userID = userID;
    return this.http
      .post<any>(
        serviceUrl + 'getAccountGateWayStatuses',
        // 'https://angular-datatables-demo-server.herokuapp.com/',
        paramters, {}
      );
  }

  getAccountDevicesStatuses(paramters, userID) {
    paramters.userID = userID;
    return this.http
      .post<any>(
        serviceUrl + 'getAccountDevicesStatuses',
        // 'https://angular-datatables-demo-server.herokuapp.com/',
        paramters, {}
      );
  }

  getAccounts(parameters) {
    return this.http
      .post<any>(
        serviceUrl + 'getAccounts',
        // 'https://angular-datatables-demo-server.herokuapp.com/',
        parameters, {}
      );
  }




  getTiers() {
    return this.http.get<any>(serviceUrl + 'getTiers');
  }

  getServices() {
    return this.http.get<any>(serviceUrl + 'getServices');
  }

  getAccountGateWays(paramters) {
    return this.http
      .post<any>(
        serviceUrl + 'getAccountGateways',
        // 'https://angular-datatables-demo-server.herokuapp.com/',
        paramters, {}
      );
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<PortalUser>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
