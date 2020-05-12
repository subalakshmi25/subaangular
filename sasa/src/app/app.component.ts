import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  num1 = '';
  num2 = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculateval = '';
  answered = false;
  operatorSet = false;

  // key operation performed

  calc(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '%') {
      const lastKey = this.num2[this.num2.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+' || lastKey === '%')  {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.num2 === '')) {
        return;
      }
      this.operand1 = parseFloat(this.num2);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.num2.length === 10) {
      return;
    }
    this.num2 += key;
  }

  //clear values

  allClear() {
    this.num2 = '';
    this.num1 = '';
    this.operatorSet = false;
  }

  //answer for addtion,subtraction,multiplication,division and modulus performed

  ans() {
    this.calculateval = this.num2;
    this.operand2 = parseFloat(this.num2.split(this.operator)[1]);
    if (this.operator === '/') {
      this.num1 = this.num2;
      this.num2 = (this.operand1 / this.operand2).toString();
      this.num1 = this.calculateval;
     } 
     else if (this.operator === 'x') {
      this.num1 = this.num2;
      this.num2 = (this.operand1 * this.operand2).toString();
      this.num1 = this.calculateval;
    }
     else if (this.operator === '-') {
      this.num1 = this.num2;
      this.num2 = (this.operand1 - this.operand2).toString();
      this.num1 = this.calculateval;
    }
     else if (this.operator === '+') {
      this.num1 = this.num2;
      this.num2 = (this.operand1 + this.operand2).toString();
      this.num1 = this.calculateval;
    }
    else if (this.operator === '%') {
      this.num1 = this.num2;
      this.num2 = (this.operand1 % this.operand2).toString();
      this.num1 = this.calculateval;
    }  this.answered = true;
  }
}
