import { Component, Inject } from '@angular/core';
import { EditClassificationFormComponent } from '../../components/edit-classification-form/edit-classification-form.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { Technology } from '../../models/technology';

@Component({
  selector: 'app-edit-classification-dialog',
  imports: [EditClassificationFormComponent, MatDialogModule],
  templateUrl: './edit-classification-dialog.component.html',
  styleUrl: './edit-classification-dialog.component.scss'
})
export class EditClassificationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditClassificationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { initialData: Technology; formTitle: string; formButtonText: string }
  ) {}

  handleFormSubmit(formData: Technology) {
    this.dialogRef.close(formData);
  }
}
