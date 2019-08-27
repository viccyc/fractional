import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  purchaseProduct() {
    console.log('in purchaseProduct!!');

    this.productService.purchaseProduct();

  }
}
