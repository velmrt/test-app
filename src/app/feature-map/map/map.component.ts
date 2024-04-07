import {AfterViewInit, Component, inject} from '@angular/core';
import {CreateWaypointComponent} from "../create-waypoint/create-waypoint.component";
import 'leaflet-routing-machine'
import {MapService} from "../services/map.service";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    CreateWaypointComponent
  ],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements AfterViewInit {
  private readonly mapService = inject(MapService)

  ngAfterViewInit(): void {
    this.mapService.initMap()
  }

}
