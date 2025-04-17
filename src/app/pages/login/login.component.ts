import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  googleLogin() {
    console.log("sdsd");
    
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
