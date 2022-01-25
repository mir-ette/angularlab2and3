import { Supplier} from "./supplier.model";

export interface Product{
    id?:number;
    name : string;
    price : number;
    discount? : number ;
    imageUrl:string;
    supplier? : Supplier;
}
export interface Testproduct extends Product {
    counter: number;
  }