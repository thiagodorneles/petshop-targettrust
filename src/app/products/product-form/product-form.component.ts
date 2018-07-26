import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProduct, Product } from '../product.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'ttt-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  providers: [ ProductsService ]
})
export class ProductFormComponent implements OnInit {
  product: IProduct = new Product
  
  constructor(private productsService: ProductsService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.userAuthenticated.subscribe(
      data => {
        if (!data) {
          this.router.navigate(['/login'])
        }
      }
    )
  }

  save() {
    this.productsService.create(this.product).subscribe(
      data => {
        this.router.navigate(['/produtos'])
      }
    )
  }

}
