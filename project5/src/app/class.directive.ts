import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private el: ElementRef) {
  }

  // @Input() set bgColor(color: any) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // REPLACE NGCLASS
  @Input('appClass') set Class(obj: any) {
    for (let i in obj) {
      if (obj[i]) {
        this.el.nativeElement.classList.add(i);
      } else {
        this.el.nativeElement.classList.remove(i);
      }
    }
  };

}
