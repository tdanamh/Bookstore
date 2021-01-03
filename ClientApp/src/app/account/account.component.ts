import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  allOrders;
  myOrders = [];

  constructor(private http: HttpClient) {
    let userId = localStorage.getItem("userConnected");
    let that = this;
    this.http.get<Order[]>('http://localhost:49820/' + 'api/orders/')
      .subscribe(result => {
        this.allOrders = result;
        this.allOrders.forEach(function (item, index) {
          if (item.userId == userId) {
            that.myOrders.push(item);
          }
        });
      });
  }

  ngOnInit() {

  }

}

interface Order {
  "userId": String,
  "productIds": String[],
  "address": String,
}


