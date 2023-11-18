import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rainbow]',
  standalone: true,
})
export class RainbowDirective {
  constructor() {}

  @HostBinding('style.color') color: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';

  generateRainbow = () => {
    let hexa_color = '#';
    const letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      hexa_color += letters[Math.floor(Math.random() * 16)];
    }
    return hexa_color;
  };

  @HostListener('keyup') writeRainbow() {
    const rainbow = this.generateRainbow();
    console.log(rainbow);
    this.color = rainbow;
    this.borderColor = rainbow;
  }
}
