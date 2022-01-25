import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductsItemComponent } from './core/pruducts-features/products-item/products-item.component';
import { ProductsListComponent } from './core/pruducts-features/products-list/products-list.component';
import { ProductsFilterComponent } from './core/pruducts-features/products-filter/products-filter.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsItemComponent,
    ProductsListComponent,
    ProductsFilterComponent,
    DropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
