import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RainbowDirective } from '../../directives/rainbow.directive';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [CommonModule, RainbowDirective],
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css',
})
export class MiniWordComponent {
  color: string = 'black';
  fontSize: number = 25;
  fontType: string = 'arial';
  onFontFamilyChange(event: any) {
    this.fontType = event.target.value || 'arial';
  }

  onSizeChange(event: any) {
    this.fontSize = event.target.value || 25;
  }

  onColorChange(event: any) {
    this.color = event.target.value || 'black';
  }
}
