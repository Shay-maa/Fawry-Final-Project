import { Component } from '@angular/core';
import { ProductsService } from '../../services/product.service';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { ProductComponent } from '../product/product.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../product';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
@Component({
  // providers:,
  selector: 'app-all-product',
  standalone: true,
  imports: [NgFor, SpinnerComponent, NgIf, ProductComponent, RouterLink],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.scss',
})
export class AllProductComponent {
  products: Product[] = [];
  categoeies: string[] = [];
  loading: boolean = false;
  cartProduct: any[] = [];

  constructor(
    private getProductServices: ProductsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.getProductServices.getAllProducts().subscribe(
      (res: any) => {
        this.products = res.content;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        alert('error');
      }
    );
  }

  addToCart(event: any) {
    let cartId = this.getCartId(); // جلب cartId من الـ localStorage أو توليد واحد جديد

    if (!cartId) {
      cartId = this.generateCartId(); // توليد cartId جديد
      localStorage.setItem('cartId', cartId); // تخزين cartId في localStorage
    }

    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);

      let exist = this.cartProduct.find(
        (item: any) => item.item.id == event.item.id
      );

      if (exist) {
        exist.quantity = event.quantity;
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
        this.sendToBackend(cartId, event.item.id, exist.quantity);
      } else {
        this.cartProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
        this.sendToBackend(cartId, event.item.id, event.quantity);
      }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      this.sendToBackend(cartId, event.item.id, event.quantity); //
    }
  }

  sendToBackend(cartId: string, productId: number, quantity: number) {
    this.http
      .post('http://localhost:8083/shop/cart', { productId, quantity, cartId })
      .subscribe(
        (response) => {
          console.log('تمت إضافة المنتج إلى السلة بنجاح:', response);
        },
        (error) => {
          console.error('حدث خطأ أثناء إضافة المنتج إلى السلة:', error);
        }
      );
  }

  getCartId(): string | null {
    return localStorage.getItem('cartId');
  }

  generateCartId(): string {
    return Math.random().toString().substr(2, 4);
  }
}
