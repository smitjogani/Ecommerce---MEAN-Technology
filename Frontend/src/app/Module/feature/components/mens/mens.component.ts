import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { mensPants } from '../../../../../assets/data/pants/MenPants';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../State/Product/product.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { filter, singleFilter } from '../products/FilterData';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-mens',
    standalone: true,
    templateUrl: './mens.component.html',
    styleUrl: './mens.component.css',
    imports: [
        MatDividerModule,
        CommonModule,
        MatCheckboxModule,
        MatRadioModule,
        ProductCardComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class MensComponent {
  isSortMenuOpen: boolean = false;
  filterData: any;
  singleFilterData: any;
  menPants: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.filterData = filter;
    this.singleFilterData = singleFilter;
    this.menPants = mensPants;

    this.activatedRoute.paramMap.subscribe((params) => {
      console.log('params : ', params);
      var reqData = {
        category: params.get('levelThree'),
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 10000,
        minDiscount: 0,
        pageNumber: 1,
        pageSize: 10,
        stock: null,
      };

      this.productService.findProductByCategory(reqData);
    });
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    const filterValues = queryParams[sectionId]
      ? queryParams[sectionId].split(',')
      : [];
    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1);
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',');
    } else {
      delete queryParams[sectionId];
    }

    this.router.navigate([], { queryParams });
  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams });
  }

  toggleSortingMenu(): void {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }
}
