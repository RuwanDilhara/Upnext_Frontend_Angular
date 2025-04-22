import { Component } from '@angular/core';
import { FooterComponent } from "../common/footer/footer.component";
import { HomeNavbarComponent } from "../common/home-navbar/home-navbar.component";
import { PostComponent } from "../subComponents/post/post.component";

@Component({
  selector: 'app-feed',
  imports: [FooterComponent, HomeNavbarComponent, PostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {

}
