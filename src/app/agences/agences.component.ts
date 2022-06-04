import { AgentService } from './../services/agent.service';
import { AgenceService } from './../services/agence.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { faFacebookF,faTwitter,faSkype,faGoogle} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.scss']
})
export class AgencesComponent implements OnInit {
  faFacebook=faFacebookF;
  faTwitter=faTwitter;
  faSkype=faSkype;
  faGoogle=faGoogle;
 
 
  
  agencesGouv :any
agenceLibelles:any

selectedGov = "";
agence : any
user:any

  gouvernorat = [
    {"code":"01","Title":"Ariana"},
    {"code":"02","Title":"Tunis"}]
  
    agences  : any 
  agences_copie: any;
  
  CodeAgence: any;
 admin:any
  constructor(private _agent:AgentService,private agenceService : AgenceService, private sanitizer: DomSanitizer    ) { }
 
  ngOnInit(): void {
    this.agenceService.getListAgences().subscribe(data => {
     // console.log(data.body)
      let ag = data.body
      this.agences = []
      this.agencesGouv = []
      this.agenceLibelles = []
      for (let i = 0; i < ag.length; i++) {
        this.agences.push(ag[i]);
        this.agencesGouv.push(ag[i].Gouvernerat);
        this.agenceLibelles.push(ag[i]);
      }
     /* console.log(this.agences)
      console.log(this.agencesGouv)
      console.log(this.agenceLibelles)
      */
      // const distinctThings = this.agences.filter(
      //   (thing:any, i:any, arr:any) => arr.findIndex(t => t.Gouvernerat === thing.Gouvernerat) === i
      // );

   
      // this.agencesGouv = distinctThings;

      this.agencesGouv.sort((a:any, b:any) => (a.Gouvernerat > b.Gouvernerat) ? 1 : -1)
      this.agenceLibelles.sort((a:any, b:any) => (a.CodeAgence > b.CodeAgence) ? 1 : -1)

    })
    this.getall();

  }
  getall(){
    this._agent.getallAgent().subscribe(
      (res)=>{
        this.user=res
        
        console.log(res);

      },
      (err)=>{
        console.log(err);


      }
    )
  }
  filtrage(a:any){
    a=a.target.value
    this.agences_copie=[]
    console.log(this.agences)
    //this.agences=this.agences_copie.filter(s  => s.Gouvernerat==a )
    for (let i=0;i<this.agences.length;i++){
      if (this.agences[i].Gouvernerat==a){
        this.agences_copie.push(this.agences[i])
      }
    }
    console.log(this.agences_copie)

  }
  getGov(e:any){ 
   // console.log(e)
   // console.log(this.selectedGov)
  }


  getAgence(e : any ){
  let codeAgence = e.target.value
  for (let i=0 ; i< this.agences_copie.length ; i++ ){
    if (this.agences_copie[i].CodeAgence == codeAgence) {
      this.agence = this.agences_copie[i] ;
      console.log(this.agence) ;

      this.agence.localisation =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.agences[i].localisation.trim());
        
        if (this.agences[i].localisation.trim() == ""){
          this.agence.localisation = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.97936122912773!2d10.184447316260568!3d36.80854223840714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3540c31c0ae7%3A0x2c208f7c24d8eae!2zU1RCIEJhbmsg2KfZhNi02LHZg9ipINin2YTYqtmI2YbYs9mK2Kkg2YTZhNio2YbZgw!5e1!3m2!1sfr!2stn!4v1646381102053!5m2!1sfr!2stn");
          }

          console.log(this.agence)
      return
    }
  }
  
    
  }
  getCodeAgence(e : any ){
    let codeAgence = e.target.value
    for (let i=0 ; i< this.agences.length ; i++ ){
      if (this.CodeAgence == codeAgence) {
        this.CodeAgence = this.agences_copie[i] ;
        console.log(this.agence) ;
  
        this.agence.localisation =
          this.sanitizer.bypassSecurityTrustResourceUrl(this.agences[i].localisation.trim());
          
          if (this.agences[i].localisation.trim() == ""){
            this.agence.localisation = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d279.97936122912773!2d10.184447316260568!3d36.80854223840714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3540c31c0ae7%3A0x2c208f7c24d8eae!2zU1RCIEJhbmsg2KfZhNi02LHZg9ipINin2YTYqtmI2YbYs9mK2Kkg2YTZhNio2YbZgw!5e1!3m2!1sfr!2stn!4v1646381102053!5m2!1sfr!2stn");
            }
  
            console.log(this.agence)
        return
      }
    }
    
      
    }
}
