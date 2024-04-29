import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {

  @Input() showButton:any;

  updateCartItem(num: Number) {
    console.log(num);
  }

  removeCartItem() {
    console.log("Remove Cart Item")
  }
}
