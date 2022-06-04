import { AgentService } from './../services/agent.service';
import { Component, OnInit } from '@angular/core';
import { faFacebookF,faTwitter,faSkype,faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  faFacebook=faFacebookF;
  faTwitter=faTwitter;
  faSkype=faSkype;
  faGoogle=faGoogle;
  faLinkedin=faLinkedin;
  id:any
 

  constructor(private _agent:AgentService,private route: ActivatedRoute) { }
  agent={

  }

  ngOnInit(): void {
    
    
    this.id = this.route.snapshot.paramMap.get('id');
    this._agent.getById(this.id).subscribe(
      
      
      res=>{
        
        console.log(res);
        
        this.agent = res;
      }
    )

  }


}
