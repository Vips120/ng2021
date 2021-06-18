import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Password Genrator';
  public length: number = 0;
  public password?: string = '';
  public includeLetters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbol: boolean = false;

  public IncludeLetters(): void {
    this.includeLetters = !this.includeLetters;
  };
  public IncludeNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  };
  public IncludeSymbol(): void {
    this.includeSymbol = !this.includeSymbol;
  };

  public addLengthpassword(value: any) {
    // let data: string = value.target.value;
    let data = parseInt(value.target.value);
    console.log(data);

    if (!isNaN(data)) {
      this.length = data;
    }
    this.length = data;

  };

  public onClick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbol = '!@$#^&*()';
    let generatedval: string = '';
    if (this.includeLetters) {
      generatedval += letters;
    };
    if (this.includeNumbers) {
      generatedval += numbers;
    };
    if (this.includeSymbol) {
      generatedval += symbol;
    };
    let result: any = '';
    for (let i = 0; i < this.length; i++) {
      let randVal: number = Math.floor(Math.random() * generatedval.length);
      console.log(generatedval[randVal]);
      result += generatedval[randVal];
    };
    this.password = result;
  };
}
