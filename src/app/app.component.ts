import { Component } from '@angular/core';
 import{Product, Testproduct} from'./_models/product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'mirette_angular';
  addedProduct:Testproduct[]=[];

  onItemAdded(product:Product){ 
    let testAdd: Testproduct = { ...product, counter: 1 };
 
    let findId = this.addedProduct.find((item) => item.id === testAdd.id);
    if (findId) { findId.counter++;

    }else {
        this.addedProduct.push(testAdd);
      }
    }
  }

// addedProduct:Product[] =[];

// onItemAdded(product:Product){
// console.log(product);
// this.addedProduct.push(product) ;
// } }