import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages/pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'main', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graph1', component: Graph1Component},
      { path: 'account-settings', component: AccountSettingsComponent},
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
