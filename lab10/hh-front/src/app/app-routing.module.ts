import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {CompaniesComponent} from "./companies/companies.component";

const routes: Routes = [
  {path: 'home', component: MainpageComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companies/:id', component: VacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
