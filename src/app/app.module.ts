import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DriversComponent } from './drivers/drivers.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ProfileComponent } from './profile/profile.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { CircuitsComponent } from './circuits/circuits.component';
import { DriversService } from './services/drivers.service';
import { DriverNamePipe } from './pipes/driver-name.pipe';
import { ConstructorNamePipe } from './pipes/constructor-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    NavComponentComponent,
    ProfileComponent,
    ConstructorsComponent,
    CircuitsComponent,
    DriverNamePipe,
    ConstructorNamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DriversService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
