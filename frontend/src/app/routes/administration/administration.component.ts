import { Component } from '@angular/core';
import { TechnologyViewerTabelComponent } from '../../components/technology-viewer-tabel/technology-viewer-tabel.component';
import { ApproveUsersComponent } from '../../components/approve-users/approve-users.component';

@Component({
  selector: 'app-administration',
  imports: [TechnologyViewerTabelComponent, ApproveUsersComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {}
