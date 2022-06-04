import { Component, OnInit } from '@angular/core';
import { faPhoenixFramework } from '@fortawesome/free-brands-svg-icons';
import * as AOS from 'aos';
import { faYoutube,faFacebookF, } from '@fortawesome/free-brands-svg-icons'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faYoutube=faYoutube;
  faFacebook=faFacebookF;
 
 
  name = ""  ;
  constructor() { 

  }

  ngOnInit(): void {
    AOS.init();
   /* this.name ="Makrem ";
    setTimeout(() => {
      this.name = "Dhouha"
    }, 1000);*/
  }

}
