import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project4';
  public username!: string;
  public date!: string;
  public currency!: string;
  public miles!: number;
  User(e: any) {
    this.username = e.target.value;
  };
  onDateChange(e: any) {
    this.date = e.target.value;
  };
  getCurrency(e: any) {
    this.currency = e.target.value;
  };
  getMilesInfo(e: any) {
    this.miles = parseFloat(e.target.value);
  }
}
