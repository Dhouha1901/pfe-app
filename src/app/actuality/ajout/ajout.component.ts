import { ActualityService } from './../../services/actuality.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  
  private touched: any;



  constructor(private _actuality:ActualityService,private router:Router) {

   }


  ngOnInit(): void {

  }



  image:any;
  actuality={
    title:  '',
    description: '',
    date: '',    
    direction: ''
    }
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  ajout(){


    let f =new FormData();
    f.append('title',this.actuality.title);
    f.append('description',this.actuality.description);
    f.append('date',this.actuality.date);
    f.append('image',this.image);
    f.append('direction',this.actuality.direction);
    
  
    this._actuality.ajoutActuality(f).subscribe(
      (res)=>{
    console.log(res);
    this.router.navigate(['/listg'])
      },
      err=>{
        console.log(err);

      }
    )

  }

 }

