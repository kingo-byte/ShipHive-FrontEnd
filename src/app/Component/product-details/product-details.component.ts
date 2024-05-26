import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  recievedData : string | null = '';
  constructor(private router : ActivatedRoute)
  {}


  ngOnInit(): void {
      this.recievedData = this.router.snapshot.paramMap.get('id')
  }
}
