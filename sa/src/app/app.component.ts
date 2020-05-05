import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  public num1:number;
	public num2:number;
	public result:number;
	public answer: any;

  //sum operation performed 

	sum() {
		this.result = this.num1 + this.num2;
		this.answer = this.num1 + ' + ' + this.num2;
  }
  
  //subtraction operation performed 

	diff() {
		this.result = this.num1 - this.num2;
		this.answer = this.num1 + ' - ' + this.num2;
  }
  
  //multiplication operation performed 

	mult() {
		this.result = this.num1 * this.num2;
		this.answer = this.num1 + ' x ' + this.num2;
  }
  
  //division operation performed 

	div() {
			this.result = this.num1 / this.num2;
			this.answer = this.num1 + ' / ' + this.num2;
    }
    
  //modulus operation performed 

	mod() {
			this.result = (this.num1 %this.num2);
			this.answer = this.num1 + ' % ' + this.num2;
		}

}


