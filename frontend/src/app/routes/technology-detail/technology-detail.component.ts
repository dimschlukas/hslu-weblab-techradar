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

@Component({
  selector: 'app-technology-detail',
  imports: [MatCardModule, DatePipe, MatButtonModule, MatIconModule, MatMenuModule, MatChipsModule],
  templateUrl: './technology-detail.component.html',
  styleUrl: './technology-detail.component.scss'
})
export class TechnologyDetailComponent implements OnInit {
  publishTechnology: any;
  technology?: Technology;
  isAdmin = false;

  constructor(
    private route: ActivatedRoute,
    private technologiesService: TechnologiesService,
    private authService: AuthService
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

  editClassification(arg0: any) {
    throw new Error('Method not implemented.');
  }
  editTechnology(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onEdit() {
    throw new Error('Method not implemented.');
  }
}
