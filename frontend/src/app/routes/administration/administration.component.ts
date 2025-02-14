import { Component } from '@angular/core';
import { TechnologyViewerTabelComponent } from '../../components/technology-viewer-tabel/technology-viewer-tabel.component';

@Component({
  selector: 'app-administration',
  imports: [TechnologyViewerTabelComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {}
