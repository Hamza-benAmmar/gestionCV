import { Component, OnInit } from '@angular/core';
import { Cv } from '../../models/cv';
import { EmbaucheService } from '../../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrl: './embauche.component.css',
})
export class EmbaucheComponent implements OnInit {
  cvs: Cv[] | null = null;
  constructor(private embaucheService: EmbaucheService) {}
  ngOnInit(): void {
    this.cvs = this.embaucheService.getEmbaches();
  }
}
