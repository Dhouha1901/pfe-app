import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-lougout',
  templateUrl: './lougout.component.html',
  styleUrls: ['./lougout.component.scss']
})
export class LougoutComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    // this.logout();
 this.router.navigate(['loginn']);
 localStorage.clear();

  }

  
 
}
