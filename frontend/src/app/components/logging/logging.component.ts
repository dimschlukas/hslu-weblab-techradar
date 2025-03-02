import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule,
  MatCell,
  MatHeaderCell
} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { LoggingService } from '../../shared/services/logging/logging.service';
import { Log, LogPage } from '../../models/log';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-logging',
  imports: [
    MatTableModule,
    MatCardModule,
    MatCell,
    MatHeaderCell,
    MatButtonModule,
    DatePipe,
    MatPaginatorModule
  ],
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.scss'
})
export class LoggingComponent implements OnInit {
  displayedColumns: string[] = ['timestamp', 'type', 'success', 'email', 'reason'];
  logs = new MatTableDataSource<Log>([]);
  totalLogs: number = 0;
  limit: number = 10;
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs() {
    this.loggingService.getLogs(this.currentPage, this.limit).subscribe((data: LogPage) => {
      this.logs.data = data.logs;
      this.totalLogs = data.total;
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.limit = event.pageSize;
    this.getLogs();
  }
}
