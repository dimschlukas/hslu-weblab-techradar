import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Category, Ring, Technology } from '../../models/technology';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TechnologiesService } from '../../shared/services/technologies/technologies.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-technology-viewer-tabel',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './technology-viewer-tabel.component.html',
  styleUrl: './technology-viewer-tabel.component.scss'
})
export class TechnologyViewerTabelComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'category', 'ring', 'description', 'justification'];
  technologies = new MatTableDataSource<Technology>([]);
  categories: Category[] = [
    {
      _id: 'techniques',
      name: 'Techniques'
    },
    {
      _id: 'platforms',
      name: 'Platforms'
    },
    {
      _id: 'tools',
      name: 'Tools'
    },
    {
      _id: 'languages_frameworks',
      name: 'Languages & Frameworks'
    }
  ];
  rings: Ring[] = [
    {
      _id: 'adopt',
      name: 'Adopt'
    },
    {
      _id: 'trial',
      name: 'Trial'
    },
    {
      _id: 'assess',
      name: 'Assess'
    },
    {
      _id: 'hold',
      name: 'Hold'
    }
  ];
  filterValues = { name: '', categories: [] as string[], rings: [] as string[] };

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private technologiesService: TechnologiesService) {}
  ngOnInit(): void {
    this.getTechnologies();
  }

  ngAfterViewInit() {
    this.technologies.paginator = this.paginator;
    this.technologies.sort = this.sort;

    this.technologies.filterPredicate = function (data, filter: string): boolean {
      const filterObj = JSON.parse(filter);
      const matchesName = data.name.toLowerCase().includes(filterObj.name);
      const matchesCategory =
        filterObj.categories.length === 0 || filterObj.categories.includes(data.category._id);
      const matchesRing = filterObj.rings.length === 0 || filterObj.rings.includes(data.ring._id);
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
}
