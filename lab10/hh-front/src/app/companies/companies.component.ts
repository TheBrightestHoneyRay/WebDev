import { Component, OnInit } from '@angular/core';
import { Company } from "../company";
import { CompanyService } from "../company.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: Company[];
  newCompany: string='';

  constructor(private companyService: CompanyService) {
    this.companies = []
  }

  ngOnInit(): void {
    this.companyService.getCompany().subscribe((companies) =>{
      this.companies = companies
    })
  }

  addCompany(){
    if(this.newCompany.length){
      this.companyService.createCompany(this.newCompany).subscribe((company) =>{
        this.companies.push(company)
        this.newCompany=''
      })
    }
  }
}
