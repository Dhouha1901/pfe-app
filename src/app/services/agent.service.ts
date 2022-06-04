import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  constructor(private http:HttpClient, private endpoint : EndpointService) { }
  getallAgent(){
    return this.http.get(this.endpoint.url+'agent/getall');

  }
  ajoutagent(agent:any){
    return this.http.post(this.endpoint.url+'agent/ajout',agent);
  }
  getById(id:any){
    return this.http.get(this.endpoint.url+'agent/getbyid/'+id);
  }
  delete(id:any){
    return this.http.delete(this.endpoint.url+'agent-/delete/'+id)
  }
  update(id:any,emploi:any){
    return this.http.put(this.endpoint.url+'agent/update/'+ id, emploi);
  }


}
