import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateclientComponent } from './client/createclient/createclient.component';
import { ViewclientComponent } from './client/viewclient/viewclient.component';
import { HomeComponent } from './home/home.component';
import { CreatelawComponent } from './law/createlaw/createlaw.component';
import { ViewlawComponent } from './law/viewlaw/viewlaw.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { TrackerComponent } from './tracker/tracker.component';
import { AdduserComponent } from './user/adduser/adduser.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },

  // ------------------------ Laws  -------------------------
  {
    path: 'create-law',
    component: CreatelawComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-laws',
    component: ViewlawComponent,
    canActivate: [AuthGuard]
  },

  // ------------------------ Client  -------------------------

  {
    path: 'create-client',
    component: CreateclientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-clients',
    component: ViewclientComponent,
    canActivate: [AuthGuard]
  },
  // ------------------------ User  -------------------------
  {
    path: 'user-role',
    component: AdduserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'view-law',
    component: CreatelawComponent,
    canActivate: [AuthGuard]
  },

  // ------------------------ Tracker  -------------------------
  {
    path: 'view-tracker',
    component: TrackerComponent,
    canActivate: [AuthGuard]
  },

  // ------------------------ **  -------------------------

  {
    path: "**",
    component: PagenotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
