import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Technology } from '../../models/technology';
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
  categories: string[] = ['techniques', 'platforms', 'tools', 'languages_frameworks'];
  rings: string[] = ['adopt', 'trial', 'assess', 'hold'];
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
}
