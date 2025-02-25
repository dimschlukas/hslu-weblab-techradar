import { Component } from '@angular/core';
import { TechnologyViewerTabelComponent } from '../../components/technology-viewer-tabel/technology-viewer-tabel.component';
import { ApproveUsersComponent } from '../../components/approve-users/approve-users.component';
import { LoggingComponent } from '../../components/logging/logging.component';

@Component({
  selector: 'app-administration',
  imports: [TechnologyViewerTabelComponent, ApproveUsersComponent, LoggingComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {}
