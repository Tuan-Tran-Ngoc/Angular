import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServerHttpService } from '../Services/server-http.service';

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

  constructor(private serverHttp : ServerHttpService) { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue('Tuan Tran');
    console.warn(this.name.value);
  }

  updateProfile(){
    let data = {name: this.profile.controls.firstName.value, lastname: this.profile.controls.lastName.value};
    console.log(this.profile.value);
    console.log(this.profile.controls.firstName.value);
    console.log(this.profile.controls.lastName.value);
    this.serverHttp.addPost(data).subscribe((data) => {
      console.log("addPost : ", data);
    });
    // console.log(this.profile.firstName);
  }
}
