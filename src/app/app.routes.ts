import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import {HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent} from './components/about/about.component';
/* import { Name4Component } from './'; */


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  /* { path: 'path4', component: Name4Component }, */
  { path: '**', component: HomeComponent },

];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
