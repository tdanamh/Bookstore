import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ContactComponent } from "./contact/contact.component";
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "books/:bookId", component: ProductDetailsComponent },
      { path: "contact", component: ContactComponent },
      { path: "cart", component: CartComponent},
      { path: 'books', component: BooksComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'account', component: AccountComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ContactComponent,
    CartComponent,
    BooksComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent
  ],
  bootstrap: [AppComponent],
  providers: [CartService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
