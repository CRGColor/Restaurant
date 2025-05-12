import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Dish } from '../../interfaces/dish';
import { ResturantDataService } from '../../services/resturant-data.service';
import { Restaurant } from '../../interfaces/restaurant';


@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent {

  private route = inject(ActivatedRoute);
  private restaurantService = inject(ResturantDataService);

  restaurantId = 0;
  restaurant: Restaurant | undefined;


  dishes: Dish[] = [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian Pasta Dish', price: 150 },
    { id: 2, title: 'Grilled Salmon', description: 'Served with seasonal veggies', price: 220 },
    { id: 3, title: 'Veggie Burger', description: 'Plant-based goodness!', price: 120 }
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params  => {
      this.restaurantId = Number(params.get('id'));
      this.restaurant = this.restaurantService.getRestaurantsById(this.restaurantId);
    });
  }

}
