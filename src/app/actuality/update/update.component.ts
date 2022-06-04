import { ActualityService } from './../../services/actuality.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private route:ActivatedRoute,private _actuality:ActualityService,private router:Router) { }
id:any
response:any;
image:any;
actuality={
  title:  '',
  description: '',
  date: '',    
  direction: '',
  image:''
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this._actuality.getById(this.id).subscribe(
     (res)=>{
       console.log(res);
       this.response=res,
       this.actuality=this.response},
      (err)=>{
        console.log(err);

      }
    )
  }
 
  selectedimage(event:any){
    this.image=event.target.files[0];

  }

  update(){


    let f =new FormData();
    f.append('title',this.actuality.title);
    f.append('description',this.actuality.description);
    f.append('date',this.actuality.date);
    f.append('direction',this.actuality.direction);

    if(this.image){
      f.append('image',this.image);}
      else{
        f.append('image',this.actuality.image);

      }
      this._actuality.update(this.id,f).subscribe(
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

