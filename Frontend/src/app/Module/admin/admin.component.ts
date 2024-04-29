import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { userService } from '../../State/User/user.service';
import {MatIconModule} from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { FooterComponent } from "../shared/components/footer/footer.component";

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css',
    imports: [RouterOutlet, MatIconModule, MatButton, FooterComponent]
})
export class AdminComponent {
  constructor(private router: Router, private userService: userService,) {}
  
  handleNavigate = (path: any) => {
    this.router.navigate([path]);
  };

  handleLogout() {
    let succ:any = this.userService.logout();
    this.router.navigate(['/']);
  }
}
