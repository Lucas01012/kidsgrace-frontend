import { provideRouter } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TeamInfoComponent } from './team-info/team-info.component';
export const appConfig = {
  providers: [
    provideRouter([
      {path:'', component: HomeComponent},
      {path: 'login', component: LoginPageComponent },
      {path: 'register', component: RegisterPageComponent},
      {path:'cart', component: CartPageComponent},
      {path:'user', component:ProfilePageComponent},
      {path:'team', component:TeamInfoComponent}
    ])
  ]
};
