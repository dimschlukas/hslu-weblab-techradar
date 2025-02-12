import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Technology } from '../../models/technology';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
export class TechnologyViewerTabelComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'category', 'ring', 'description', 'justification'];
  technologies = new MatTableDataSource<Technology>(mockTechnologies);
  categories: string[] = ['Techniques', 'Platforms', 'Tools', 'Languages & Frameworks'];
  rings: string[] = ['Adopt', 'Trial', 'Assess', 'Hold'];
  filterValues = { name: '', categories: [] as string[], rings: [] as string[] };

  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

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
}

export const mockTechnologies: Technology[] = [
  {
    id: '1',
    name: 'SvelteKit',
    ring: 'Adopt',
    category: 'Languages & Frameworks',
    description:
      'A modern application framework for building fast and optimized web apps using Svelte.',
    justification:
      'SvelteKit offers a highly efficient and developer-friendly approach, reducing complexity and improving performance.'
  },
  {
    id: '2',
    name: 'Deno',
    ring: 'Assess',
    category: 'Tools',
    description:
      'A secure runtime for JavaScript and TypeScript, designed as an alternative to Node.js.',
    justification:
      'Deno improves security and module management, but adoption is still limited in enterprise projects.'
  },
  {
    id: '3',
    name: 'Angular',
    ring: 'Trial',
    category: 'Languages & Frameworks',
    description:
      'A TypeScript-based framework developed by Google for building scalable web applications.',
    justification:
      'Well-suited for enterprise applications, but has a steep learning curve and larger bundle sizes compared to alternatives.'
  },
  {
    id: '4',
    name: 'MongoDB',
    ring: 'Adopt',
    category: 'Tools',
    description: 'A NoSQL document-oriented database known for scalability and flexibility.',
    justification:
      'Ideal for modern web applications that require dynamic and flexible schema structures.'
  },
  {
    id: '5',
    name: 'GraphQL',
    ring: 'Trial',
    category: 'Tools',
    description:
      'A query language for APIs that allows clients to request only the data they need.',
    justification:
      'Reduces over-fetching and under-fetching of data, but requires a shift in API design thinking.'
  },
  {
    id: '6',
    name: 'Rust',
    ring: 'Assess',
    category: 'Languages & Frameworks',
    description: 'A systems programming language focused on safety, concurrency, and performance.',
    justification:
      'Promising for performance-critical applications, but ecosystem and tooling are still evolving.'
  },
  {
    id: '7',
    name: 'Tailwind CSS',
    ring: 'Adopt',
    category: 'Languages & Frameworks',
    description:
      'A utility-first CSS framework that enables rapid UI development with predefined styles.',
    justification:
      'Increases development speed and maintains design consistency with a flexible utility approach.'
  },
  {
    id: '8',
    name: 'Bun',
    ring: 'Assess',
    category: 'Tools',
    description:
      'A fast JavaScript runtime designed as an alternative to Node.js with built-in tools.',
    justification:
      'Potential to simplify tooling and improve performance, but still in early adoption stages.'
  },
  {
    id: '9',
    name: 'Tauri',
    ring: 'Trial',
    category: 'Languages & Frameworks',
    description:
      'A lightweight framework for building desktop applications using web technologies.',
    justification:
      'Consumes fewer resources than Electron, making it a strong alternative for desktop apps.'
  },
  {
    id: '10',
    name: 'WebAssembly',
    ring: 'Assess',
    category: 'Languages & Frameworks',
    description:
      'A binary instruction format that enables high-performance execution of code in browsers.',
    justification:
      'Expands web capabilities, allowing near-native performance, but lacks widespread tooling.'
  }
];
