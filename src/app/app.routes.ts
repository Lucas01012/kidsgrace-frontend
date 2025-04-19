import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CatalogoPageComponent } from './catalogo-page/catalogo-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TeamInfoComponent } from './team-info/team-info.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  {path: 'register', component: RegisterPageComponent},
  {path: 'cart', component: CartPageComponent},
  {path: 'admin', component: AdministratorPageComponent},
  {path: 'edit', component: EditPageComponent},
  {path: 'catalogo', component: CatalogoPageComponent},
  {path: 'user', component:ProfilePageComponent},
  {path:'team', component: TeamInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false }), BrowserModule, CommonModule], 
  exports: [RouterModule],
})
export class AppRoutingModule { }