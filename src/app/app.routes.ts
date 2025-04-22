import { Routes } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
   
    {
        path:'feed',
        component: FeedComponent
    },
    {
        path:'login',
        component: LoginComponent
    }
];
