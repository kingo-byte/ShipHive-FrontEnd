import { Component } from '@angular/core';
import { Router } from '@angular/router';


class product {
  productName?: string | null;
  productPrice?: string | null;
  productBrand?: string | null;
  imageUrl?: string | null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: product[] = [
    {
      productBrand: 'Positive Energy',
      productName: 'Orange', productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      productBrand: 'Positive Energy',
      productName: 'Preckly Pear Lemonade',
      productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      productBrand: 'Positive Energy',
      productName: 'Tropical Bliss',
      productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      productBrand: 'Positive Energy',
      productName: 'Watermelon Mania',
      productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      productBrand: 'Riot Energy',
      productName: 'Mango',
      productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      productBrand: 'Riot Energy',
      productName: 'Watermelon',
      productPrice: '149',
      imageUrl: 'https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
  ];

  constructor(private router: Router) { }


  productDetails(productName?: string | null): void {

    this.router.navigate(['/product-details', { id: productName }])
  }

}
