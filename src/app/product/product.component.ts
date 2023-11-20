import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './models/product';
import {
  BehaviorSubject,
  Observable,
  concatMap,
  scan,
  switchMap,
  takeUntil,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  loading = true;
  products$ = new Observable<Product[]>();
  pageSize = new BehaviorSubject<number>(0);
  constructor(public productService: ProductService) {
    this.products$ = this.pageSize.pipe(
      concatMap((pageSize: number) =>
        this.productService.getProducts(12, pageSize)
      ),
      takeWhile((products) => !!products.length),
      scan((allProducts, products) => {
        return [...allProducts, ...products];
      }, [])
    );
  }
  showmore() {
    this.pageSize.next(this.pageSize.value + 12);
  }
}
