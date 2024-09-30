import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sum:number =0;
  constructor() {}

  // add(str: any){
  //   this.sum=0;
  //   for(let i=0;i<str?.length;i++){
  //     if(/\d/.test(str[i])){
  //       this.sum += +str[i]
  //     }
  //   }
    
  // }
  add(str: any){
    this.sum=0;
    str = str.split(',')
    // console.log('%c [ str ]-24', 'font-size:13px; background:black; color:#e9ed18fa;', str)
    for(let i=0;i<str?.length;i++){
      if(/\d/.test(str[i])){
        this.sum += +str[i]
      }
    }
    
  }
}

