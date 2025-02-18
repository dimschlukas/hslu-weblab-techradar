import { Component } from '@angular/core';
import { TechnologyViewerTabelComponent } from '../../components/technology-viewer-tabel/technology-viewer-tabel.component';

@Component({
  selector: 'app-viewer',
  imports: [TechnologyViewerTabelComponent],
  templateUrl: './viewer.component.html',
  styleUrl: './viewer.component.scss'
})
export class ViewerComponent {}
