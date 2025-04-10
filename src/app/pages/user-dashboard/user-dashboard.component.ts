import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../components/common/home-navbar/home-navbar.component";
import { FooterComponent } from "../../components/common/footer/footer.component";

@Component({
  selector: 'app-user-dashboard',
  imports: [HomeNavbarComponent, FooterComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
