import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3';
  public randomText = lorem.sentence();
  public Inputtext = '';

  public typeText(e: any) {
    this.Inputtext = e.target.value;
  };
  public isInput(prevText: any, currentText: any) {
    if (!currentText) { return 'pending' }
    console.log(prevText, currentText);
    return (prevText === currentText) ? 'success' : 'failed';
  }
}
