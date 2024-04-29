import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDivider,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css',
})
export class CreateProductComponent {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {}

  addproductFrom: FormGroup = this.formBuilder.group({
    image: ['', [Validators.required]],
    brand: ['', [Validators.required]],
    sizes: ['', [Validators.required]],
    title: ['', [Validators.required]],
    color: ['', [Validators.required]],
    discountedPrice: ['', [Validators.required]],
    price: ['', [Validators.required]],
    // quantity: ['', [Validators.required]],
    topLevelCategory: ['', [Validators.required]],
    secondLevelCategory: ['', [Validators.required]],
    thirdLevelCategory: ['', [Validators.required]],
    // fore: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  handleSubmit() {
    if (this.addproductFrom.valid) {
      // console.log('Add Product Details : ', this.addproductFrom.value);
      this.http.post("http://localhost:5454/api/admin/products/",this.addproductFrom.value).subscribe((resultData:any) => {
        // console.log(resultData);
        this.router.navigate(['/admin/products']);
        alert("Product Added")
      })
    }
  }
}
