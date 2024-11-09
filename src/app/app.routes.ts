import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './dashboard/dashboard.component';

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
    component: DashboardComponent
  },
  {
    path: '', redirectTo: 'admin', pathMatch: "full"
  }
];
