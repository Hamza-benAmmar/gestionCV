import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrl: './item-cv.component.css',
})
export class ItemCvComponent {
  @Input() cv: Cv | null = null;

  @Output() selected = new EventEmitter();

  selectCv() {
    console.log('to the list component');
    this.selected.emit(this.cv);
  }
}
