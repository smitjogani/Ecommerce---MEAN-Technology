import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../auth/login/login.component';
import { SignupComponent } from '../../../auth/signup/signup.component';
import { userService } from '../../../../State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/Appstate';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isMenMenuOpen: boolean = false;
  isWomenMenuOpen: boolean = false;
  userProfile: any;
  userProfileData: any;
  userId: any;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: userService,
    private store: Store<AppState>,
    private http: HttpClient
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) {
      this.userProfile = this.userService.getUserProfile();
    }

    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      // console.log(user);

      if (this.userProfile) {
        this.dialog.closeAll();
      }
    });

    //get Profile
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );
    this.userProfileData = this.http
      .get('http://localhost:5454/api/users/profile', { headers })
      .subscribe((resultData: any) => {
        this.userProfileData = resultData;
        this.userId = resultData._id;
      });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleMenMenu(): void {
    this.isMenMenuOpen = !this.isMenMenuOpen;
  }

  toggleWomenMenu(): void {
    this.isWomenMenuOpen = !this.isWomenMenuOpen;
  }

  openNavbarContent(menu: any) {}

  navigateToCart(path: any) {
    this.router.navigate([path]);
  }

  navigateToOrder(path: any) {
    this.router.navigate([path], {
      queryParams: { id: this.userId },
    });
  }

  navigateHome(path: any) {
    this.router.navigate([path]);
  }

  handleOpenLoginModel = (path: any) => {
    this.dialog.open(LoginComponent, {
      width: '400px',
      disableClose: false,
    });
    // this.router.navigate([path]);
  };

  handleSignUpModel = (path: any) => {
    this.dialog.open(SignupComponent, {
      width: '400px',
      disableClose: false,
    });
    // this.router.navigate([path]);
  };

  handleLogout() {
    let succ: any = this.userService.logout();
    this.router.navigate(['/']);
  }

  handleNavigate = (path: any) => {
    this.router.navigate([path]);
  };
}
