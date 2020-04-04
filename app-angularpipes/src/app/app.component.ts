import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angularpipes';

//   name : string='';
//   currentdate : number;
//  number :number=0;
name : string = 'Angular 4 Project!';
   todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];


//   pipes(name:string): void{
//     this.name=name;
//   }
// date():void{
//   this.currentdate=Date.now();
// }

// numbers(currency:number):void{
// this.number=currency;
// }
}
