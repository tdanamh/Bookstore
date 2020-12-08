import { Component } from "@angular/core";

import { products } from "../products";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  books;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.books = this.http.get('http://localhost:49820/api/books');
  }

  onNotify(productData) {
    let productDataArray = productData.split(";");
    let name = productDataArray[0];
    let price = productDataArray[1];
    window.alert("The price for the book: " + name + " is " + price);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
