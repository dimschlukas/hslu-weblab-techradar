import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-create-technology-form',
  imports: [
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './create-technology-form.component.html',
  styleUrl: './create-technology-form.component.scss'
})
export class CreateTechnologyFormComponent implements OnInit {
  @Input() initialData!: Technology;
  errorMessage: string | null = null;
  matcher = new MyErrorStateMatcher();
  technologyForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    category: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ring: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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

    const formData = this.technologyForm.value as Technology;
    console.log(formData);
    this.TechnologiesService.addTechnology(formData).subscribe(() => this.location.back());
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
