import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  imports: [NavbarComponent],
})
export class ProductCardComponent {
  @Input() product: any;
  productData: any;

  constructor(private router: Router) {}

  idColl(product: any) {
    this.productData = product;
  }

  navigate(product: any) {
    this.router.navigate([`/product-details/${product._id}`], {
      queryParams: { id: product._id },
    });
  }
}
