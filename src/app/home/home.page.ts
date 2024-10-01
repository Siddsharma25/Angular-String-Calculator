import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sum:number =0;
  constructor() {}

  // function to calculate sum for simple string with comma separated numbers 
  // add(str: any){
    
  //     this.sum=0;
  //     str = str.split(',')
  //     for(let i=0;i<str?.length;i++){
       
  //           this.sum += +str[i]
  //     }
   
  // }

  // function to calculate sum for numbers string separated in different lines 
  // add(str: any){
  //     this.sum=0;
  //     str = str.split('\n')
  //     let temp=[];
  //     for(let item of str){
  //       temp.push(item.split(','));
  //     }
      
  //     for(let i=0;i<temp?.length;i++){
  //       for(let j=0; j<temp[i]?.length; j++){

  //         this.sum += +temp[i][j]
      
  //       }
  //   }
   
  // }

  //function to calculate sum for numbers string with custom delimiters
  add(str: any){
    
      this.sum=0;
      let negatives='';
      str = str.split('\n')
      let delimiter = str[0];
      str = str[1];
      str = str.split(delimiter);
      for(let i=0;i<str?.length;i++){
       if(str[i]<0){        
            negatives += str[i]+',';
          } else if(negatives?.length==0){
            this.sum += +str[i]
          }
                
      }
      if(negatives.length){
        this.sum=0;
        throw new Error('negative numbers not allowed '+ negatives.slice(0,negatives.length-1))
      }
    
   }

}

