import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages/pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graph1Component } from "./graph1/graph1.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: 'main', component: DashboardComponent, data: { title: 'Dashboard' }},
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress' } },
      { path: 'graph1', component: Graph1Component, data: { title: 'Graph' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Settings' } },
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises' } },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'RXJS' } },
      { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
