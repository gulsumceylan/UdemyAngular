import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor:string;

  constructor(private el:ElementRef) {
   
   }

   @HostListener('mouseenter') onMouseEnter() {
    //this.highlight('yellow');
    //this.makeBigger();
    //this.makeInvisible();
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    //this.highlight('purple');
    //this.makeSmaller();
    //this.makeVisible();
    this.el.nativeElement.style.backgroundColor=this.highlightColor;
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  makeVisible(){
    this.el.nativeElement.style="visibility:visible"
  }

  makeInvisible(){
    this.el.nativeElement.style="visibility:hidden"
  }

  makeBigger(){
    this.el.nativeElement.style="font-size:2rem"
  }

  makeSmaller(){
    this.el.nativeElement.style="font-size:0.8rem"
  }
}
