import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { AuthService } from './services/auth.service';
import { CreatelawComponent } from './law/createlaw/createlaw.component';
import { ViewlawComponent } from './law/viewlaw/viewlaw.component';
import { ViewclientComponent } from './client/viewclient/viewclient.component';
import { CreateclientComponent } from './client/createclient/createclient.component';
import { AuthGuard } from './auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdduserComponent } from './user/adduser/adduser.component';
import { InviteuserComponent } from './user/inviteuser/inviteuser.component';
import { TrackerComponent } from './tracker/tracker.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    CreatelawComponent,
    ViewlawComponent,
    ViewclientComponent,
    CreateclientComponent,
    PagenotfoundComponent,
    AdduserComponent,
    InviteuserComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
