import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../components/common/home-navbar/home-navbar.component";
import { FooterComponent } from "../../components/common/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  imports: [HomeNavbarComponent, FooterComponent,RouterOutlet],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
