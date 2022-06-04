import { HttpClient } from '@angular/common/http';
import { EndpointService } from './endpoint.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from'@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router,private http:HttpClient, private endpoint : EndpointService) { }
  login(admin:any){
    
    return this.http.post(this.endpoint.url+'admin/login',admin);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('role')==="ADMIN")
    return true;
    this.router.navigate(['home']);
    return false;
    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if (localStorage.getItem('role'))
      return true;
      this.router.navigate(['home']);
      return false;
      }
   
}
