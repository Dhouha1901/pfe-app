import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  present(){
    if(localStorage.getItem('role')){
      return true
    }else{
      return false ;
    }
  }

  logout(){
    localStorage.clear;
    // this.router.navigate(['/login']);

  }
 

}