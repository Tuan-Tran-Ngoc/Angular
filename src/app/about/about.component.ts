import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = '';
  public age = 0;
  public arr = [6];

  constructor(
    private common:CommonService,
    private serverHttp: ServerHttpService
    ) { 
    // this.age = common.age;
    this.arr = common.arr;
  }


  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data)=>{
        console.log(data);
        this.name = data.name;
        this.age = data.age;
    });
  }

}
