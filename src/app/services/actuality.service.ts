import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {
    constructor(private http:HttpClient, private endpoint : EndpointService) { }
    getallActuality(){
      return this.http.get(this.endpoint.url+'actuality/getall');
  
    }
    ajoutActuality( actuality: any){
      return this.http.post(this.endpoint.url+'actuality/ajout',actuality);
    }
    getById(id:any){
      return this.http.get(this.endpoint.url+'actuality/getbyid/'+id);
    }
    delete(id:any){
      return this.http.delete(this.endpoint.url+'actuality/delete/'+id)
    }
    update(id:any,actuality:any){
      return this.http.put(this.endpoint.url+'actuality/update/'+ id, actuality);
    }
  
  
  }

