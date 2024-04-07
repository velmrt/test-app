import {Component, inject, } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MapService} from "../services/map.service";

@Component({
  selector: 'app-create-waypoint',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './create-waypoint.component.html',
  styleUrl: './create-waypoint.component.css'
})
export class CreateWaypointComponent {
  private readonly fb = inject(FormBuilder)
  private readonly mapService = inject(MapService)

  public createWaypointForm = this.fb.group({
    name: ['', Validators.required],
    longitude: ['', Validators.required],
    latitude: ['', Validators.required]
  })

  public onSubmit() {
    if (this.createWaypointForm.valid) {
      const formData = this.createWaypointForm.value;
      if (formData.name && formData.longitude && formData.latitude) {
        const data = {
          name: formData.name,
          longitude: +formData.longitude,
          latitude: +formData.latitude
        };
        this.mapService.addWaypointToMap(data);
      }
    }
    this.createWaypointForm.reset()
  }
}



