import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public age = 10;
  public arr = [1,2,3,4,5];

  constructor() { }

  public incAge(){
    ++this.age;
  }
}
