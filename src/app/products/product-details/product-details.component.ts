import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { IProduct, Product } from '../product.model';

@Component({
  selector: 'ttt-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ ProductsService ]
})
export class ProductDetailsComponent implements OnInit {
  product:IProduct = new Product()

  constructor(private productsService: ProductsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']

    this.productsService.getById(id).subscribe(
      data => { this.product = data; }
    )
  }

}
