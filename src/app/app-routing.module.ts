import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  { 
    path : 'projects',
    component: ProjectsComponent
  },
  {

    path : 'profile',
    component : ProfileComponent

  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
