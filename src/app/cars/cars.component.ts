import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{

  cars:any[];
  hideCars:boolean;
  constructor(){
    this.hideCars=true;
    //array of cars
  this.cars=[
    {
      make:"BMW",
      model:"3series",
      year: 2019
  
    },
    {
      make:"Lamborgini",
      model:"Aventador",
      year: 2018
  
    },
    {
      make:"TATA",
      model:"Sumo",
      year: 1015
  
    }
  
  ]
  }

  public getCars(){
    return this.cars;
  }

  toggleCars() {
    this.hideCars = !this.hideCars;
  }

  ngOnInit(): void {
  }

}
