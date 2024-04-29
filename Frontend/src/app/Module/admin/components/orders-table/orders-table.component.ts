import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders-table',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
})
export class OrdersTableComponent {
  orderArray: any;
  index: any = 0;
  status: any;
  orderId: any;

  constructor(private http: HttpClient) {
    this.getAllorders();
  }

  getAllorders() {
    this.http
      .get('http://localhost:5454/api/admin/orders')
      .subscribe((resultData: any) => {
        this.orderArray = resultData;
        // console.log(this.orderArray);
      });
  }
}
