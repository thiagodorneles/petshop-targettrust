import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct, Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<IProduct[]> {
    return this.http.get(`${environment.apiUrl}/products`)
      .map((data: any[]) => {
        const products:IProduct[] = []

        data.forEach(item => {
          const product = new Product()

          product.id = item.id;
          product.name = item.name;
          product.description = item.description;
          product.price = item.price;
          product.url = item.url;

          products.push(product)
        })

        return products
      })
      .catch(error => Observable.throw(error))
  }

  getById(id: number) : Observable<IProduct> {
    return this.http.get(`${environment.apiUrl}/products/${id}`)
      .map((data: any) => {
        const product = new Product()

        product.id = data.id
        product.name = data.name
        product.description = data.description
        product.price = data.price
        product.url = data.url

        return product
      })
      .catch(error => Observable.throw(error))
  }

  create(product: IProduct) : Observable<IProduct> {
    return this.http.post(`${environment.apiUrl}/products`, product)
      .map((data: IProduct) => data)
      .catch(error => Observable.throw(error))
  }

}
