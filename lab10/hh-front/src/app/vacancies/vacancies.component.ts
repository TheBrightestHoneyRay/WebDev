import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../vacancy";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit{
  vacancies: Vacancy[];
  company_id: number=NaN;
  newName: string='';
  newDescription: string='';
  newSalary: number=NaN;

  constructor(private route: ActivatedRoute,private vacancyService: VacancyService) {
    this.vacancies = []
  }

  ngOnInit(): void{
    this.getVacancies()

  }

  getVacancies():void{
    this.route.paramMap.subscribe((params) =>{
      let _id = params.get('id');
      if(_id){
        let id = +_id;
        this.vacancyService.getCompanyVacancies(id).subscribe((vacancies) =>{
            this.vacancies = vacancies
          }
        )
      }
    });
  }

  deleteVacancy(id: number):void{
    this.vacancyService.deleteVacancy(id).subscribe((vacancy) =>{})
    this.getVacancies()
  }

}
