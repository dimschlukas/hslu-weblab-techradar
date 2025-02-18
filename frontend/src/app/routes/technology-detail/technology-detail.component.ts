import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechnologiesService } from '../../shared/services/technologies/technologies.service';
import { Technology } from '../../models/technology';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MatChipsModule } from '@angular/material/chips';
import { TechnologyDialogService } from '../../shared/services/technology-dialog/technology-dialog.service';

@Component({
  selector: 'app-technology-detail',
  imports: [MatCardModule, DatePipe, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule],
  templateUrl: './technology-detail.component.html',
  styleUrl: './technology-detail.component.scss'
})
export class TechnologyDetailComponent implements OnInit {
  technology?: Technology;
  isAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private technologiesService: TechnologiesService,
    private authService: AuthService,
    private dialogService: TechnologyDialogService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isLoggedInAsAdmin();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.technologiesService
        .getTechnology(id)
        .subscribe((technology) => (this.technology = technology));
    }
  }

  editTechnology(technology: Technology) {
    if (this.isAdmin) {
      this.dialogService.openEditDialog(
        technology,
        (updatedTech) => (this.technology = updatedTech)
      );
    }
  }

  editClassification(technology: Technology) {
    if (this.isAdmin) {
      this.dialogService.openEditClassificationDialog(
        technology,
        (updatedTech) => (this.technology = updatedTech)
      );
    }
  }

  publishTechnology(technology: Technology) {
    if (this.isAdmin) {
      const technologyCopy = { ...technology };
      technologyCopy.published = true;
      this.dialogService.openPublishDialog(
        technologyCopy,
        (updatedTech) => (this.technology = updatedTech)
      );
    }
  }
}
