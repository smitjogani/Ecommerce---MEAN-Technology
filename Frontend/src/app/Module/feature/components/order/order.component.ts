import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
// import { OrderCardComponent } from './order-card/order-card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any;

@Component({
  selector: 'app-order',
  standalone: true,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  imports: [CommonModule, MatCheckbox, NavbarComponent, FooterComponent],
})
export class OrderComponent {
  userId: any;
  productArray: any = [];
  prices: any = [];
  paymentStatus: any;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params) => {
      this.userId = params['id'];
    });

    this.http
      .get(`http://localhost:5454/api/orders/${this.userId}`)
      .subscribe((data: any) => {
        this.productArray = data;
        // console.log(data);

        for (let i in data) {
          this.prices.push(data[i].price);
        }

        // console.log(this.prices);
      });
  }

  createPayment(price: any) {
    this.http
      .post('http://localhost:5454/api/payment/createOrder', {
        productName: price.title,
        amount: price.price,
        productId: price._id,
      })
      .subscribe((data: any) => {
        // console.log(data);
        if (data.success) {
          var options = {
            key: data.key_id,
            amount: data.amount,
            currency: 'INR',
            description: '',
            image: '',
            order_id: data.order_Id,
            handler: {
              succ() {
                alert('Payment Success');
              },
            },
            prefill: {
              contact: data.contact,
              name: data.name,
              email: data.email,
            },
            modal: {
              escape: false,
            },
            notes: {},
            theme: {
              color: '#000000',
            },
          };

          var razorpay = new Razorpay(options);
          razorpay.open();

          this.http
            .put(
              `http://localhost:5454/api/orders/updateStatus/${price._id}`,
              []
            )
            .subscribe((data: any) => {
              this.router.navigate(['account/orders'], {
                queryParams: { id: this.userId },
              });
            });
        } else {
          alert('Payment Failed');
        }
      });
  }
}
