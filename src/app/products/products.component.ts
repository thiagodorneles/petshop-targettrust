import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { IProduct } from './product.model';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ]
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      data => this.products = data,
      error => {
        alert('deu ruim')
      }
    )
  }

}
