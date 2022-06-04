import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.scss']
})

export class LoginnComponent implements OnInit {
 
  email:any=""
  mdp:any=""
    constructor(private _auth:AdminService,private router:Router) { }
    // auth = getAuth();
    ngOnInit(): void {
    
  
    }
    
  user : any;
 
  
  login(){
    let admin={
      email:this.email,
      mdp:this.mdp
    }
console.log(this.email)
console.log(admin)
      this._auth.login(admin).subscribe(
        (res)=>{
          


        console.log(res);
        this.user= res;
        localStorage.setItem('token',this.user.myToken);
        localStorage.setItem('role',this.user.role);
        this.router.navigate(['/actuality']);
        console.log("test");
        },
        err=>{
          console.log(err);


        }
      );

    

}
}
