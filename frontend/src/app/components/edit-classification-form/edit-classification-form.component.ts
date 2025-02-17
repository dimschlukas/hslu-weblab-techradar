import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Technology } from '../../models/technology';
import { TechnologiesService } from '../../shared/services/technologies/technologies.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-edit-classification-form',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  templateUrl: './edit-classification-form.component.html',
  styleUrl: './edit-classification-form.component.scss'
})
export class EditClassificationFormComponent implements OnInit {
  @Input() formTitle!: string;
  @Input() formButtonText!: string;
  @Input() initialData!: Technology;
  @Output() formSubmit = new EventEmitter<Technology>();
  errorMessage: string | null = null;
  matcher = new MyErrorStateMatcher();
  technologyForm = new FormGroup({
    ring: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    justification: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });

  constructor(private TechnologiesService: TechnologiesService, private location: Location) {}
  ngOnInit(): void {
    this.technologyForm.patchValue(this.initialData);
  }

  onSubmit() {
    if (this.technologyForm.invalid) {
      return;
    }
    const formData = { ...this.initialData, ...this.technologyForm.value };
    this.TechnologiesService.updateTechnology(formData).subscribe({
      next: (technology) => {
        this.formSubmit.emit(technology);
      },
      error: (error: Error) => {
        this.errorMessage = error.message;
      }
    });
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
