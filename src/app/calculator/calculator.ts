import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  result = signal<string>('0');
  firstNumber = signal<string>('0');
  secondNumber = signal<string>('');
  operator = signal<string>('');

  numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operatorButtons = ['+', '-', '*', '/', '%', '.'];
  otherButtons = ['=', 'C'];

  private resetDisplay = false;

  add(a: number, b: number): number {
    return a + b;
  }
  subtract(a: number, b: number): number {
    return a - b;
  }
  multiply(a: number, b: number): number {
    return a * b;
  }
  divide(a: number, b: number): number {
    return a / b;
  }
  modulo(a: number, b: number): number {
    return a % b;
  }

  clear() {
    this.result.set('0');
    this.firstNumber.set('0');
    this.secondNumber.set('');
    this.operator.set('');
    this.resetDisplay = false;
  }

  getResult(event: any) {
    if (typeof event === 'number') {
      this.handleNumber(event);
    } else if (typeof event === 'string') {
      if (this.operatorButtons.includes(event)) {
        if (event === '.') {
          this.handleDecimal();
        } else {
          this.handleOperator(event);
        }
      } else if (event === '=') {
        this.calculate();
      } else if (event === 'C') {
        this.clear();
      }
    }
  }

  private handleNumber(num: number) {
    if (this.operator() === '') {
      if (this.resetDisplay) {
        this.firstNumber.set(num.toString());
        this.resetDisplay = false;
      } else {
        if (this.firstNumber() === '0') {
          this.firstNumber.set(num.toString());
        } else {
          this.firstNumber.set(this.firstNumber() + num.toString());
        }
      }
      this.result.set(this.firstNumber());
    } else {
      if (this.secondNumber() === '' || this.secondNumber() === '0') {
        this.secondNumber.set(num.toString());
      } else {
        this.secondNumber.set(this.secondNumber() + num.toString());
      }
      this.updateResult();
    }
  }

  private handleDecimal() {
    if (this.operator() === '') {
      if (this.resetDisplay) {
        this.firstNumber.set('0.');
        this.resetDisplay = false;
      } else {
        if (!this.firstNumber().includes('.')) {
          this.firstNumber.set(this.firstNumber() + '.');
        }
      }
      this.result.set(this.firstNumber());
    } else {
      if (this.secondNumber() === '') {
        this.secondNumber.set('0.');
      } else {
        if (!this.secondNumber().includes('.')) {
          this.secondNumber.set(this.secondNumber() + '.');
        }
      }
      this.updateResult();
    }
  }

  private handleOperator(op: string) {
    if (this.operator() !== '' && this.secondNumber() !== '') {
      this.calculate();
    }
    this.operator.set(op);
    this.secondNumber.set('');
    this.resetDisplay = false;
  }

  private updateResult() {
    if (this.operator() === '' || this.secondNumber() === '') {
      this.result.set(this.firstNumber());
      return;
    }
    const first = parseFloat(this.firstNumber());
    const second = parseFloat(this.secondNumber());
    let computed = 0;
    switch (this.operator()) {
      case '+':
        computed = this.add(first, second);
        break;
      case '-':
        computed = this.subtract(first, second);
        break;
      case '*':
        computed = this.multiply(first, second);
        break;
      case '/':
        computed = this.divide(first, second);
        break;
      case '%':
        computed = this.modulo(first, second);
        break;
      default:
        return;
    }
    this.result.set(computed.toString());
  }

  private calculate() {
    if (this.operator() === '' || this.secondNumber() === '') {
      return;
    }
    this.updateResult();
    this.firstNumber.set(this.result());
    this.secondNumber.set('');
    this.operator.set('');
    this.resetDisplay = true;
  }
}
