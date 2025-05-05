import { Component } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css'
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [
    {
      id: 1,
      title: 'La Parrilla Gourmet',
      address: 'Av. Siempre Viva 123, CDMX',
      phone: 5523456789,
      email: 'reservas@laparrilla.com',
      webUrl: 'https://laparrilla.com',
      priceLevel: '$200-$300'
    },
    {
      id: 2,
      title: 'Sabor del Mar',
      address: 'Calle del Puerto 45, Cancún',
      phone: 9987654321,
      email: 'info@sabordelmar.mx',
      webUrl: 'https://sabordelmar.mx',
      priceLevel: '$300-$400'
    },
    {
      id: 3,
      title: 'Tacos El Poder',
      address: 'Taco Street 666, Tijuana',
      phone: 6641234567,
      email: 'contacto@tacoselpoder.com',
      webUrl: 'https://tacoselpoder.com',
      priceLevel: '$100-$200'
    }
  ];

}
