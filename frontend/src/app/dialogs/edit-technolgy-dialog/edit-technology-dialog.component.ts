import { Component, Inject } from '@angular/core';
import { EditTechnologyFormComponent } from '../../components/edit-technology-form/edit-technology-form.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Technology } from '../../models/technology';

@Component({
  selector: 'app-edit-technology-dialog',
  imports: [EditTechnologyFormComponent, MatDialogModule],
  templateUrl: './edit-technology-dialog.component.html',
  styleUrl: './edit-technology-dialog.component.scss'
})
export class EditTechnologyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTechnologyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Technology
  ) {}

  handleFormSubmit(formData: Technology) {
    this.dialogRef.close(formData);
  }
}
