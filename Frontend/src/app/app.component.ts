import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './Module/feature/components/home/home.component';
import { NavbarComponent } from './Module/shared/components/navbar/navbar.component';
import { FooterComponent } from './Module/shared/components/footer/footer.component';
import { ProductsComponent } from './Module/feature/components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule, select } from '@ngrx/store';
import { AppState } from './Models/Appstate';
import { userService } from './State/User/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    RouterOutlet,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'clothshop';

  constructor(
    private userService: userService,
    private store: Store<AppState>
  ) {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();
  }

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();

    this.store.pipe(select((store) => store.auth)).subscribe(() => {
      this.userService.getUserProfile();
      // console.log('store', this.store);
    });
  }
}
