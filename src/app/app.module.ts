import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';


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
