import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatTableModule,
  MatCell,
  MatHeaderCell
} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { UserService } from '../../shared/services/user/user.service';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-approve-users',
  imports: [
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatCell,
    MatHeaderCell,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './approve-users.component.html',
  styleUrl: './approve-users.component.scss'
})
export class ApproveUsersComponent implements OnInit {
  displayedColumns: string[] = ['createdAt', 'email', 'action'];
  users = new MatTableDataSource<User>([]);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getPendingApprovals();
  }

  getPendingApprovals() {
    this.userService.getPendingUsersRequests().subscribe((data) => (this.users.data = data));
  }

  approveUser(user: User) {
    user.role = 'Employee';
    this.userService.updateUser(user).subscribe(() => this.getPendingApprovals());
  }

  denyUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => this.getPendingApprovals());
  }
}
