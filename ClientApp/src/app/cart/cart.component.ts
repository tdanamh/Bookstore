import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  canPlaceOrder;
  userId;

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();

    if (localStorage.getItem('userConnected')) {
      this.userId = localStorage.getItem('userConnected');
      this.http.get<Account>('http://localhost:49820/' + 'api/users/' + this.userId)
        .subscribe(result => {
          this.canPlaceOrder = true;
        });

    } else {
      this.canPlaceOrder = false;
    }

  }

  onSubmit(customerData) {

    let order = {
      userId: this.userId,
      address: customerData.address,
      booksIds: [],
      total: null
    };

    let products = this.cartService.getItems();

    products.forEach(function (value, index) {
      order.booksIds.push(value.id)
      order.total += value.price
    });

    // place order
    this.http.post<Order>('http://localhost:49820/' + 'api/orders/', order)
      .subscribe(result => {
      });

    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.location.replace('/');
    alert('Your order has been submitted');

  }
}

interface Order {
  "userId": String,
  "productIds": String[],
  "address": String,
}

