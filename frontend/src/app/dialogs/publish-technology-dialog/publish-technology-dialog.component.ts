import { Component, Inject } from '@angular/core';
import { PublishTechnologyFormComponent } from '../../components/publish-technology-form/publish-technology-form.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Technology } from '../../models/technology';

@Component({
  selector: 'app-publish-technology-dialog',
  imports: [PublishTechnologyFormComponent, MatDialogModule],
  templateUrl: './publish-technology-dialog.component.html',
  styleUrl: './publish-technology-dialog.component.scss'
})
export class PublishTechnologyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PublishTechnologyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Technology
  ) {}

  handleFormSubmit(formData: Technology) {
    this.dialogRef.close(formData);
  }
}
