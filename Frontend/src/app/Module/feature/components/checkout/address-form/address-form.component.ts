import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { AddressCardComponent } from '../../../../shared/components/address-card/address-card.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address-form',
  standalone: true,
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.css',
  imports: [
    CommonModule,
    AddressCardComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDivider,
  ],
})
export class AddressFormComponent {
  adresses = [1];

  userID: any;


  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  myForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    streetAddress: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    pincode: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    mobile: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  });

  ngOnInit() {
    // this.activeRoute.queryParams.subscribe((params) => {
    //   this.productId = params['id'];
    // });

    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );

    this.http
      .get('http://localhost:5454/api/users/profile', { headers })
      .subscribe((data: any) => {
        this.userID = data._id;
      });
  }

  handlecreateOrder(item: any) {
    console.log(item);
  }

  handleSubmit = () => {
    const formValue = this.myForm.value;
    console.log('form data', formValue);
  };
}
