import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Tuan';
  public age;
  public arr = [6];

  constructor(private common: CommonService) { 
    this.age = common.age;
    this.arr = common.arr;
  }

  ngOnInit(): void {
  }

  functionClick(){
    ++this.common.age;
    this.age = this.common.age
    this.common.arr.push(this.age);
    this.arr = this.common.arr;
  }
}
