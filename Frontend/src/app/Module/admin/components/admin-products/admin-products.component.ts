import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
})
export class AdminProductsComponent {
  productArray: any;
  productId: any;
  index: any = 0;
  productData: any;
  constructor(private http: HttpClient, private router: Router) {
    this.getAllProducts();
  }

  ngOnInit() {}

  getAllProducts() {
    this.http
      .get('http://localhost:5454/api/products/getallproducts')
      .subscribe((resultData: any) => {
        console.log(resultData[0].productId);
        this.productArray = resultData;
      });
  }

  setDelete(data: any) {
    // console.log(data);
    this.http
      .delete(
        'http://localhost:5454/api/admin/products/deleteProduct' +
          '/' +
          data._id
      )
      .subscribe((resultData: any) => {
        window.location.reload();
        console.log(resultData);
      });
  }
  setUpdate(data: any, path: any) {
    this.router.navigate([path]);
    this.productData = data;
  }
}
