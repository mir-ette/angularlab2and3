 import { Component, EventEmitter, OnInit,Output } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/_models/product/product.model'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  productsArray : Product []=[
    {id:1, name:'camera',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/300"},
     {id:2, name:'laptop',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/305"},
   {id:3, name:'mic',price:8000 ,discount:80,imageUrl:"http://picsum.photos/200/309"},
   {id:4, name:'screen',price:9000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
   {id:5, name:'printer',price:1000 ,imageUrl:"http://picsum.photos/200/307"},
    {id:6, name:'mobile',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
    {id:7, name:'tv',price:4000 ,imageUrl:"http://picsum.photos/200/309"},
    {id:8, name:'tablet',price:6000 ,discount:30,imageUrl:"http://picsum.photos/200/304"}
  

  ];

 @Output()
 itemAdded:EventEmitter<Product>= new EventEmitter<Product>();

constructor(){} onItemAddedToCart(product : Product){ 
    console.log(product);
     this.itemAdded.emit(product)
    }

    ngOnInit(): void {}
  }
  
  

  
 // productsArray : Product [];
//   @Output()
//   itemAdded:EventEmitter<Product>= new EventEmitter<Product>();

  
//   constructor() {
//     this.productsArray=[  {id:1, name:'camera',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/300"},
//   {id:2, name:'laptop',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/305"},
//   {id:3, name:'mic',price:8000 ,discount:80,imageUrl:"http://picsum.photos/200/309"},
//   {id:4, name:'screen',price:9000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
//   {id:5, name:'printer',price:1000 ,imageUrl:"http://picsum.photos/200/307"},
//   {id:6, name:'mobile',price:2000 ,discount:20,imageUrl:"http://picsum.photos/200/308"},
//   {id:7, name:'tv',price:4000 ,imageUrl:"http://picsum.photos/200/309"},
//   {id:8, name:'tablet',price:6000 ,discount:30,imageUrl:"http://picsum.photos/200/304"}

//     ]}
//     testFun(){
//       this.productsArray.push();
//     }
//     onItemAddedToCart(product : Product){ 
//      console.log(product);
//      this.itemAdded.emit(product)
//   }
// }



