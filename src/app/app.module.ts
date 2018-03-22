import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DriversComponent } from './drivers/drivers.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { ProfileComponent } from './profile/profile.component';
import { ConstructorsComponent } from './constructors/constructors.component';
import { CircuitsComponent } from './circuits/circuits.component';


@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    NavComponentComponent,
    ProfileComponent,
    ConstructorsComponent,
    CircuitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
