import { Component } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MerchantSidebarComponent } from "../merchant-sidebar/merchant-sidebar.component";

@Component({
  selector: 'app-search-coupon',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    MerchantSidebarComponent
],
  templateUrl: './search-coupon.component.html',
  styleUrl: './search-coupon.component.css'
})
export class SearchCouponComponent {
  couponId: string = '';
  couponDetails: any;
  errorMessage: string = '';

  constructor(private couponService: CouponService) {}

  // Search for coupon by ID
  searchCoupon() {
    this.couponService.getCouponById(this.couponId).subscribe(
      (data:any) => {
        this.couponDetails = data;
        this.errorMessage = '';
      },
      (error:any) => {
        this.couponDetails = null;
        this.errorMessage = 'Coupon not found!';
      }
    );
  }

  // Delete the coupon
  deleteCoupon() {
    if (confirm('Are you sure you want to delete this coupon?')) {
      this.couponService.deleteCoupon(this.couponId).subscribe(
        () => {
          alert('Coupon deleted successfully.');
          this.couponDetails = null;
          this.couponId = '';
        },
        (error:any) => {
          alert('Failed to delete the coupon.');
        }
      );
    }
  }

}
