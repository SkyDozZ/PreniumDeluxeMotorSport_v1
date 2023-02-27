import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  endpoint = 'https://gta.vercel.app/api/vehicles';
  

  constructor(private httpClient: HttpClient) { }

  getAllCars(){
    return this.httpClient.get(this.endpoint + '/names');
  }

  getAllClass(){
    return this.httpClient.get(this.endpoint + '/classes');
  }

  getVehiclesByClass(category: String) {
    return this.httpClient.get(this.endpoint + '/classes/' + category);
  }

}
