import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { HomeComponent } from './Component/home/home.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProfileComponent } from './Component/profile/profile.component';

const routes: Routes = [
  { path: '', component: SignInComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule { }