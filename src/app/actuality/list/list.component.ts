import { ActualityService } from './../../services/actuality.service';
import { ActualityComponent } from './../actuality.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( public endpoint:EndpointService , private router:Router , private  _actuality : ActualityService) { }
  actuality:any;
    ngOnInit(): void {
      this._actuality.getallActuality().subscribe(
        (res)=>{
          this.actuality=res;
          console.log(res);
  
        },
        (err)=>{
          console.log(err);
  
  
        }
      )
    };
  
  
    delete(id:any){
  
 
      this._actuality.delete(id).subscribe(
        res=>{
          console.log(res);
          this.ngOnInit();
  
        },
        (err)=>{
          console.log(err);
  
        }
      )
     
  
  }

}
