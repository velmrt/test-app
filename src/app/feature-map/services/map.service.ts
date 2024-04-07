import {Injectable} from '@angular/core';
import * as L from 'leaflet';
import {PointModel} from "../models/point.model";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public map!: L.Map
  public waypoints: PointModel[] = []

  public initMap(): void {
    this.map = L.map('map', {
      center: [59.92622980298195, 30.317926889368515],
      zoom: 10
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  public addWaypointToMap(point: PointModel): void {
    this.waypoints.push(point);
      const waypoints = this.waypoints.map(p => L.Routing.waypoint(L.latLng(p.latitude, p.longitude)));
      L.Routing.control({
        waypoints,
        addWaypoints: false,
        show: false
      }).addTo(this.map);
      this.waypoints.forEach(point => {
        L.marker(L.latLng(point.latitude, point.longitude))
          .addTo(this.map)
          .bindPopup(`<b>${point.name}</b><br>Широта: ${point.latitude}<br>Долгота: ${point.longitude}`)
          .openPopup()
      });
    }
}
