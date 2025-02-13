import { Component, Inject } from '@angular/core';
import { CreateTechnologyFormComponent } from '../../components/create-technology-form/create-technology-form.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Technology } from '../../models/technology';

@Component({
  selector: 'app-add-technology-dialog',
  imports: [CreateTechnologyFormComponent, MatDialogModule],
  templateUrl: './add-technology-dialog.component.html',
  styleUrl: './add-technology-dialog.component.scss'
})
export class AddTechnologyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddTechnologyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Technology
  ) {}
}
