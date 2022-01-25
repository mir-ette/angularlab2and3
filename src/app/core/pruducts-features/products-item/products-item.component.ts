import { Component,  EventEmitter,  Input, OnInit,Output } from '@angular/core';
import {Product} from 'src/app/_models/product/product.model'
@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.sass']
})
export class ProductsItemComponent implements OnInit {
@Input()
productItem! : Product;
@Output()
itemAddedToCart:EventEmitter <Product> = new EventEmitter<Product>()  ;
  constructor() { }

  ngOnInit(): void {
  }
 calculatePrice():number{
   let result;
   if(this.productItem.discount){
     result = this.productItem.price-this.productItem.discount;
   }else{result = this.productItem.price;

   }
    return result;
 }
 onItemAdded(){
  console.log(this.productItem );
  this.itemAddedToCart.emit(this.productItem)
 }
}