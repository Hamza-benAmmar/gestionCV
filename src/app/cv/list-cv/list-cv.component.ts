import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrl: './list-cv.component.css',
})
export class ListCvComponent {
  @Output() selectedCv = new EventEmitter();

  @Input() cvs: Cv[] = [];

  selectCv(selected: Cv) {
    console.log('to the cv component');
    this.selectedCv.emit(selected);
  }
}
