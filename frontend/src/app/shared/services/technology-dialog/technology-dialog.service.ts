import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTechnologyDialogComponent } from '../../../dialogs/edit-technolgy-dialog/edit-technology-dialog.component';
import { EditClassificationDialogComponent } from '../../../dialogs/edit-classification-dialog/edit-classification-dialog.component';
import { Technology } from '../../../models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyDialogService {
  constructor(private dialog: MatDialog) {}

  openEditDialog(initialData: Technology, callback: (updatedTech: Technology) => void) {
    const dialogRef = this.dialog.open<EditTechnologyDialogComponent, any, Technology>(
      EditTechnologyDialogComponent,
      {
        data: initialData,
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        callback(result);
      }
    });
  }

  openEditClassificationDialog(
    initialData: Technology,
    callback: (updatedTech: Technology) => void
  ) {
    const dialogRef = this.dialog.open<EditClassificationDialogComponent, any, Technology>(
      EditClassificationDialogComponent,
      {
        data: {
          initialData: { ...initialData },
          formTitle: 'Edit Classification',
          formButtonText: 'Save'
        },
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        callback(result);
      }
    });
  }
  openPublishDialog(initialData: Technology, callback: (updatedTech: Technology) => void) {
    const dialogRef = this.dialog.open<EditClassificationDialogComponent, any, Technology>(
      EditClassificationDialogComponent,
      {
        data: {
          initialData: { ...initialData },
          formTitle: 'Publish Technology',
          formButtonText: 'Publish'
        },
        maxWidth: '100vw'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        callback(result);
      }
    });
  }
}
