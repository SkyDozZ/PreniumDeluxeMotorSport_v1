import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CarsService } from '../service/cars.service';
import { Car } from '../service/car';


@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit, OnDestroy {

  title!: string;

  cars: Record<string, Car> = {};
  categories: String[] = [];
  Object = Object;
  showCars = false;
  subscription! : Subscription;   


  constructor(private service: CarsService) { }
  

  ngOnInit() {
    this.title = "Showroom";
    this.subscription = this.service.getAllClass().subscribe((data) => {
       this.categories = Object.keys(data);
      // console.log(data);
    });   
  }
  
  displayVehicles(category: String) {
    this.subscription = this.service.getVehiclesByClass(category).subscribe((data) => {
      this.cars = data as Record<string, Car>;
      console.log(data);
      this.showCars = true;
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
