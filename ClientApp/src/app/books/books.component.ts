import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.books = this.http.get('http://localhost:49820/api/books');
  }

}
