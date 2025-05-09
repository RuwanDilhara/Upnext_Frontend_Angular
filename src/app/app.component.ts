import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HomeNavbarComponent } from "./components/common/home-navbar/home-navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/common/footer/footer.component";
import { UserDashboardComponent } from "./pages/user-dashboard/user-dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProUserDashboardComponent } from "./pages/pro-user-dashboard/pro-user-dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeNavbarComponent, HomeComponent, FooterComponent, UserDashboardComponent, LoginComponent, ProUserDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'upnext_frontend';
  ngOnInit(): void {
    initFlowbite();
  }
  
}