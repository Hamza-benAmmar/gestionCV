import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}
  getProducts(limit: number, skip: number = 0): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(`${this.url}?limit=${limit}&skip=${skip}`)
      .pipe(map((response) => response.products));
  }
}
