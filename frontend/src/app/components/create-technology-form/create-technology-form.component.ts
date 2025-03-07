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
  selector: 'app-create-technology-form',
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
  templateUrl: './create-technology-form.component.html',
  styleUrl: './create-technology-form.component.scss'
})
export class CreateTechnologyFormComponent implements OnInit {
  @Input() initialData!: Technology;
  @Output() formSubmit = new EventEmitter<Technology>();
  errorMessage: string | null = null;
  matcher = new MyErrorStateMatcher();
  technologyForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    category: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ring: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    justification: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    published: new FormControl(true)
  });

  constructor(private TechnologiesService: TechnologiesService, private location: Location) {}
  ngOnInit(): void {
    this.technologyForm.patchValue(this.initialData);
    this.technologyForm.get('published')?.valueChanges.subscribe((active) => {
      const ringControl = this.technologyForm.get('ring');
      const justificationControl = this.technologyForm.get('justification');

      if (active) {
        ringControl?.setValidators(Validators.required);
        justificationControl?.setValidators(Validators.required);
      } else {
        ringControl?.clearValidators();
        justificationControl?.clearValidators();
      }

      ringControl?.updateValueAndValidity();
      justificationControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.technologyForm.invalid) {
      return;
    }

    const formData = this.technologyForm.value as Technology;
    console.log(formData);
    this.TechnologiesService.addTechnology(formData).subscribe({
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
