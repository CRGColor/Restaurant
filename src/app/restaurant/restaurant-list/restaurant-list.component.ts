import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResturantDataService } from '../../services/resturant-data.service';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  private restaurantService = inject(ResturantDataService);

  restaurants = this.restaurantService.getRestaurants();
    
  

}
