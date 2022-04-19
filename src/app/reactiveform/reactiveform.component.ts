import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  public name = new FormControl('');

  public profile = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Tuan Tran');
    console.warn(this.name.value);
  }

  updateProfile(){
    console.log(this.profile.value);
    console.log(this.profile.controls.firstName.value);
    console.log(this.profile.controls.lastName.value);
    // console.log(this.profile.firstName);
  }
}
