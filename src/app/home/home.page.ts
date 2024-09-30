import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sum:number =0;
  constructor() {}

  add(str: any){
    console.log('%c [ str ]-13', 'font-size:13px; background:black; color:#e9ed18fa;', str);
    this.sum=0;
    for(let i=0;i<str?.length;i++){
      
      console.log('%c [ str[i] ]-17', 'font-size:13px; background:black; color:#e9ed18fa;', str[i])
      if(/\d/.test(str[i])){
        this.sum += +str[i]

      }
    }
    
  }
}
