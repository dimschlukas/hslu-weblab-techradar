import { Component } from '@angular/core';
import { Technology } from '../../../models/technology';
import { CreateTechnologyFormComponent } from '../../../components/create-technology-form/create-technology-form.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-technology',
  imports: [CreateTechnologyFormComponent],
  templateUrl: './add-technology.component.html',
  styleUrl: './add-technology.component.scss'
})
export class AddTechnologyComponent {
  constructor(private location: Location) {}

  handleFormSubmit(formData: Technology) {
    this.location.back();
  }
}
