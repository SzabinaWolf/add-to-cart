import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public products: any =[];
  public grandTotal!: number;

  constructor(
    private cart: CartService
  ){}

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cart.getTotalPrice();
      this.grandTotal.toPrecision(2);
    })
  }

  removeItem(item:any){
    this.cart.removeCartItem(item);
  }

  emptyCart(){
    this.cart.removeAllCart();
  }

}
