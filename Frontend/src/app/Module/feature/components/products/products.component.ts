import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/Appstate';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  imports: [
    MatDividerModule,
    CommonModule,
    MatCheckboxModule,
    MatRadioModule,
    ProductCardComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class ProductsComponent {
  // isSortMenuOpen: boolean = false;
  filterData: any;
  singleFilterData: any;
  menPants: any;
  products: any;
  typeOfCloth: any;
  fore: any;
  productData: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      var reqData = {
        typeOfCloth: params.get('levelThree'),
        fore: params.get('levelOne'),
      };

      this.fore = params.get('levelOne');
      this.typeOfCloth = params.get('levelThree');

      this.http
        .get(
          `http://localhost:5454/api/products/allproducts?fore=${this.fore}&typeOfCloth=${this.typeOfCloth}`
        )
        .subscribe((data: any) => {
          this.productData = data;
        });
    });
  }

  // toggleSortingMenu(): void {
  //   this.isSortMenuOpen = !this.isSortMenuOpen;
  // }
}
