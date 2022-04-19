import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['Honda','Yamaha','Toyota','Mercedes','Roll Roys'];
  private selectedVehicle = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("this is your name : " + this.name);
    console.log("this is your password : " + this.password);
    console.log("this is your vehicle : " + this.selectedVehicle);
  }

  selectVehicle(event: any){
    console.log(event.target.value);
    this.selectedVehicle = event.target.value;
  }
}
