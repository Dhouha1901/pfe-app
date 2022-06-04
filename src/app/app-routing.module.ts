import { AdminService } from './services/admin.service';
import { LougoutComponent } from './lougout/lougout.component';
import { UpdateComponent } from './actuality/update/update.component';
import { ListComponent } from './actuality/list/list.component';
import { AjoutComponent } from './actuality/ajout/ajout.component';
import { LoginnComponent } from './loginn/loginn.component';
import { AgencesComponent } from './agences/agences.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ActualityComponent } from './actuality/actuality.component';
import { SiegeComponent } from './siege/siege.component';
import { ProfilComponent } from './profil/profil.component';




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'agences', component:AgencesComponent},
  {path:'loginn', component:LoginnComponent },
  {path:'actuality', component:ActualityComponent},
  {path:'siege', component:SiegeComponent},
  {path:'profil', component:ProfilComponent},

  {path:'ajoutg', component:AjoutComponent},

  {path:'listg', component:ListComponent ,  canActivate: [AdminService] },
  
  {path:'update/:id', component:UpdateComponent},

  {path:'logout', component:LougoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
