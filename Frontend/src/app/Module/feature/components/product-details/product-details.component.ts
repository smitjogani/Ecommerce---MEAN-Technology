import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { menCloths } from '../../../../../assets/data/Men/men_cloths';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { cartService } from '../../../../State/Cart/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  imports: [
    MatRadioModule,
    CommonModule,
    FormsModule,
    ProductCardComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class ProductDetailsComponent {
  relatedProducts: any;
  productId: any;
  productData: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.productId = params['id'];
    });

    this.http
      .get(`http://localhost:5454/api/products/id/${this.productId}`)
      .subscribe((data: any) => {
        this.productData = data;
      });
  }

  handleAddToCart() {
    // this.cartService.addItemToCart(this.productId);
    this.router.navigate(['/checkout'], {
      queryParams: { id: this.productId },
    });
  }
}
