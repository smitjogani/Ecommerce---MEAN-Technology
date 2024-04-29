import { Component } from '@angular/core';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
// import { userService } from '../../../../State/User/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddressCardComponent } from '../../../shared/components/address-card/address-card.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDivider } from '@angular/material/divider';
import { OrderCardComponent } from '../order/order-card/order-card.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  imports: [
    AddressFormComponent,
    NavbarComponent,
    FooterComponent,
    CommonModule,
    AddressCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDivider,
    OrderCardComponent,
  ],
})
export class CheckoutComponent {
  productId: any;
  userID: any;
  productData: any;
  formValue: any;
  getedAddress: any;

  addfname: any;
  addlname: any;
  address: any;
  addcity: any;
  addstate: any;
  addPincode: any;
  addPhone: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    streetAddress: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required, Validators.minLength(6)]],
    mobile: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
  });

  ngOnInit() {
    let uid = localStorage.getItem('userId');
    this.userID = uid;

    this.activeRoute.queryParams.subscribe((params) => {
      this.productId = params['id'];
    });

    this.http
      .get(`http://localhost:5454/api/products/id/${this.productId}`)
      .subscribe((data: any) => {
        this.productData = data;
      });

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );

    this.http
      .get('http://localhost:5454/api/users/profile', { headers })
      .subscribe((data: any) => {
        this.userID = data._id;
      });

    this.http
      .get(`http://localhost:5454/api/address/${uid}`)
      .subscribe((data: any) => {
        console.log(data);
        this.getedAddress = data;
      });
  }

  sendOrder(data: any) {
    let fd = {
      firstName: data.firstName,
      lastName: data.lastName,
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      mobile: data.mobile,
    };

    this.http
      .post('http://localhost:5454/api/orders/', [
        this.productData,
        fd,
        this.userID,
      ])
      .subscribe((resultData: any) => {
        alert('Order Place Successfully');
        this.router.navigate(['account/orders'], {
          queryParams: { id: this.userID },
        });
      });
  }

  handleSubmit = () => {
    this.formValue = this.myForm.value;
    if (this.myForm.valid) {
      // console.log('form data', this.formValue);
      this.addfname = this.formValue;
      this.addlname = this.formValue.lastName;
      this.address = this.formValue.streetAddress;
      this.addcity = this.formValue.city;
      this.addstate = this.formValue.state;
      this.addPincode = this.formValue.pincode;
      this.addPhone = this.formValue.mobile;

      this.http
        .post('http://localhost:5454/api/address/', [
          this.userID,
          this.formValue,
        ])
        .subscribe((data: any) => {
          console.log(data);
        });

      this.http
        .post('http://localhost:5454/api/orders/', [
          this.productData,
          this.formValue,
          this.userID,
        ])
        .subscribe((resultData: any) => {
          alert('Order Place Successfully');
          this.router.navigate(['account/orders'], {
            queryParams: { id: this.userID },
          });
        });
    }
  };
}
