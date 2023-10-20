import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    redirectTo: 'content',
    pathMatch: 'full'
  }, 
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'listManager', loadChildren: () => import('./assistant-list/assistant-list.module').then(m => m.AssistantListModule) },
  { path: 'content', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
