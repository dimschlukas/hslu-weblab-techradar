import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule,
  MatCell,
  MatHeaderCell
} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Technology } from '../../models/technology';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TechnologiesService } from '../../shared/services/technologies/technologies.service';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AddTechnologyDialogComponent } from '../../dialogs/add-technology-dialog/add-technology-dialog.component';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { EditClassificationDialogComponent } from '../../dialogs/edit-classification-dialog/edit-classification-dialog.component';
import { EditTechnologyDialogComponent } from '../../dialogs/edit-technolgy-dialog/edit-technology-dialog.component';

@Component({
  selector: 'app-technology-viewer-tabel',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCell,
    MatHeaderCell,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatChipsModule,
    MatMenuModule
  ],
  templateUrl: './technology-viewer-tabel.component.html',
  styleUrl: './technology-viewer-tabel.component.scss'
})
export class TechnologyViewerTabelComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [];
  technologies = new MatTableDataSource<Technology>([]);
  categories: string[] = ['Techniques', 'Platforms', 'Tools', 'Languages & Frameworks'];
  rings: string[] = ['Adopt', 'Trial', 'Assess', 'Hold'];
  filterValues = { name: '', categories: [] as string[], rings: [] as string[] };
  readonly dialog = inject(MatDialog);

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(
    private technologiesService: TechnologiesService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getTechnologies();

    this.breakpointObserver.observe(['(max-width: 750px)']).subscribe((result) => {
      if (result.matches) {
        this.displayedColumns = ['name', 'category', 'ring'];
      } else {
        this.displayedColumns = [
          'name',
          'category',
          'ring',
          'description',
          'justification',
          'edit'
        ];
      }
    });
  }

  ngAfterViewInit() {
    this.technologies.paginator = this.paginator;
    this.technologies.sort = this.sort;

    this.technologies.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };

    this.technologies.filterPredicate = function (data, filter: string): boolean {
      const filterObj = JSON.parse(filter);
      const matchesName = data.name.toLowerCase().includes(filterObj.name);
      const matchesCategory =
        filterObj.categories.length === 0 || filterObj.categories.includes(data.category);
      const matchesRing = filterObj.rings.length === 0 || filterObj.rings.includes(data.ring);
      return matchesName && matchesCategory && matchesRing;
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.filterValues.name = filterValue;
    this.technologies.filter = JSON.stringify(this.filterValues);
  }

  onCategoryChange(selectedCategories: string[]) {
    this.filterValues.categories = selectedCategories;
    this.technologies.filter = JSON.stringify(this.filterValues);
  }

  onRingChange(selectedCategories: string[]) {
    this.filterValues.rings = selectedCategories;
    this.technologies.filter = JSON.stringify(this.filterValues);
  }

  getTechnologies() {
    this.technologiesService.getTechnologies().subscribe((data) => (this.technologies.data = data));
  }

  editTechnology(technology: Technology) {
    this.openEditDialog(technology);
  }

  publishTechnology(technology: Technology) {
    this.openPublishDialog(technology);
  }

  addTechnologies() {
    if (this.breakpointObserver.isMatched([Breakpoints.Handset])) {
      // Mobile: Navigate to a new page
      this.router.navigate(['/admin/add-technology']);
    } else {
      // Desktop: Open a dialog
      this.openAddDialog();
    }
  }

  openDialog(initialData: Technology) {
    const dialogRef = this.dialog.open(AddTechnologyDialogComponent, {
      data: initialData,
      maxWidth: '100vw'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open<AddTechnologyDialogComponent, any, Technology>(
      AddTechnologyDialogComponent,
      {
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.technologies.data = [...this.technologies.data, result];
      }
    });
  }

  openPublishDialog(initialData: Technology) {
    const initialDataCopy = { ...initialData };
    initialDataCopy.published = true;
    const dialogRef = this.dialog.open<EditClassificationDialogComponent, any, Technology>(
      EditClassificationDialogComponent,
      {
        data: {
          initialData: initialDataCopy,
          formTitle: 'Publish Technology',
          formButtonText: 'Publish'
        },
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.technologies.data.findIndex((t) => t._id === result._id);
        if (index !== -1) {
          this.technologies.data[index] = result;
          this.technologies.data = [...this.technologies.data];
        }
      }
    });
  }

  openEditDialog(initialData: Technology) {
    const dialogRef = this.dialog.open<EditTechnologyDialogComponent, any, Technology>(
      EditTechnologyDialogComponent,
      {
        data: initialData,
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.technologies.data.findIndex((t) => t._id === result._id);
        if (index !== -1) {
          this.technologies.data[index] = result;
          this.technologies.data = [...this.technologies.data];
        }
      }
    });
  }
}
