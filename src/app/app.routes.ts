import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './auth/auth.guard';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: "admin",
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'admin', pathMatch: "full"
  }
];
