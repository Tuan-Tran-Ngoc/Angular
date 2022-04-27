import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {

  public lstCompany = [];

  public company = new FormGroup({
    nameCompany : new FormControl(),
    contactCompany : new FormControl(),
    countryCompany : new FormControl()
  })


  constructor(private serverHttp: ServerHttpService) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany(){
    this.serverHttp.getCompany().subscribe((data) => {
        this.lstCompany = data;
        console.log("Company : ", this.lstCompany);
    })
  }

  creatCompany(){
    let newCompany = {
      name: this.company.controls.nameCompany.value,
      contact: this.company.controls.contactCompany.value,
      country: this.company.controls.countryCompany.value
    }
   
    this.serverHttp.addCompany(newCompany).subscribe((data) => {
        this.getCompany();
        console.log("add Company : ", data);
    })
  }

}
