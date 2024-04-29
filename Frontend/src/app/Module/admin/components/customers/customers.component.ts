import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  clientArray: any;
  index: any = 0;
  constructor(private http: HttpClient) {
    this.getAllProducts();
  }
  getAllProducts() {
    this.http
      .get('http://localhost:5454/api/users/getAllUser')
      .subscribe((resultData: any) => {
        // console.log(resultData);
        this.clientArray = resultData;
      });
  }
}
