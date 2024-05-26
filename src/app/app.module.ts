import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Component/home/home.component';
import { NavComponent } from './Component/nav/nav.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ProfileComponent } from './Component/profile/profile.component';



const routes: Routes = [
  {path:'', component:SignInComponent, pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path:'contact-us', component: ContactUsComponent },
  {path: 'product-details', component: ProductDetailsComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations:[
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SignInComponent,
    ContactUsComponent,
    ProductDetailsComponent,
    SignUpComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
