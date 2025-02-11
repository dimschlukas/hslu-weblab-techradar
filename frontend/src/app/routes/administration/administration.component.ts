import { Component } from '@angular/core';
import { CreateTechnologyFormComponent } from '../../components/create-technology-form/create-technology-form.component';

@Component({
  selector: 'app-administration',
  imports: [CreateTechnologyFormComponent],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {}
