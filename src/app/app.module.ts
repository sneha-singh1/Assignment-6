import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { BillComponent } from './bill/bill.component';
import { BookinfoComponent } from './bookinfo/bookinfo.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CartComponent,
    AddressComponent,
    BillComponent,
    BookinfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
