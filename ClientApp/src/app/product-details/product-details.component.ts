import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  book;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private http: HttpClient
    ) { }

  ngOnInit() {
    let books;
    this.http.get('http://localhost:49820/api/books').subscribe(
      response => {
        books = response;
        this.route.paramMap.subscribe(params => {
          this.book = books[+params.get('bookId')];
        });
      }
    );
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  } 


}
