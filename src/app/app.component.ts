import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = "COUNTER APP";
  count:number = 0;

  increase = () =>{
    this.count = this.count + 1;
  }

  decrease = () =>{
    if(this.count != 0){
      this.count = this.count - 1;
    }
  }

  reset = () =>{
    this.count = 0;
  }

}
