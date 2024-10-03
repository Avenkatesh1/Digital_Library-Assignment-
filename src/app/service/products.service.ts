import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../model/product';
import { salesdata } from '../model/sales';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  Loadproducts(){
    return this.http.get<products[]>("http://localhost:3000/products");
  }

  loadsalesdata(){
    return this.http.get<salesdata[]>("http://localhost:3000/sales");
  }
  getAllproperties(){
    return this.http.get<salesdata[]>("http://localhost:3000/properties");
  }
  saveProperty(obj:any){
    return this.http.post<salesdata[]>("http://localhost:3000/savedProperties", obj);
  }

  getProperty(){
    return this.http.get("http://localhost:3000/savedProperties");
  }

  deleteProperty(id:any){
    return this.http.delete("http://localhost:3000/savedProperties"+id);
  }

}
