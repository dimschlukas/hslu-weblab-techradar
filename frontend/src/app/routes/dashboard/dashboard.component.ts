import { Component } from '@angular/core';
import { TechnologyViewerTabelComponent } from '../../components/technology-viewer-tabel/technology-viewer-tabel.component';

@Component({
  selector: 'app-dashboard',
  imports: [TechnologyViewerTabelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
