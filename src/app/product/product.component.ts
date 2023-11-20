import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import { BehaviorSubject, Observable, scan, switchMap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  loading = true;
  products = new Observable<Product[]>();
  pageSize = new BehaviorSubject<number>(0);
  constructor(public productService: ProductService) {
    this.products = this.pageSize.pipe(
      switchMap((pageSize: number) =>
        this.productService.getProducts(12, pageSize)
      ),
      scan((acc, products) => {
        return [...acc, ...products];
      }, [])
    );
  }
  showmore() {
    const pageSize = this.pageSize.value + 12;
    if (pageSize <= 100) this.pageSize.next(pageSize);
    else {
      this.pageSize.complete();
    }
  }
}
