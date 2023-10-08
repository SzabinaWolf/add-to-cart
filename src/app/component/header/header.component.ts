import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public searchTerm: string ='';
  public totalItem: number = 0;

constructor(
  private cart: CartService
){

}

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.cart.search.next(this.searchTerm);
}

}
