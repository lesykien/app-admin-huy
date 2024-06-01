import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { products } from '../../../model/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(private _products: ProductsService) {}
  isPopup: boolean = true;
  isDropdown: boolean = false;
  listProducts: products[] = [];
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this._products.getData().subscribe((response) => {
      this.listProducts = response;
    });
  }

  OpenEdit(id: number) {
    sessionStorage.setItem('id', id.toString());
  }
}
