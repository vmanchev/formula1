import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DriversComponent } from '../drivers/drivers.component';
import { ProfileComponent } from '../profile/profile.component';
import { ConstructorsComponent } from '../constructors/constructors.component';
import { CircuitsComponent } from '../circuits/circuits.component';

const appRoutes: Routes = [
  { path: 'drivers', component: DriversComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'constructors', component: ConstructorsComponent },
  { path: 'circuits', component: CircuitsComponent },
  { path: '', redirectTo: '/drivers', pathMatch: 'full' },
  { path: '**', redirectTo: '/drivers' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
