import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { products } from '../../../model/products.model';
import { CategorysService } from '../../../services/categorys.service';
import { categoryDTOs } from '../../../model/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  constructor(
    private _products: ProductsService,
    private _categorys: CategorysService
  ) {}
  isPopup: boolean = true;
  isDropdown: boolean = false;
  listProducts: products[] = [];
  categoris: categoryDTOs[] = [];
  isLabel: string | undefined = 'Tất cả';
  ngOnInit(): void {
    this.LoadData(0);
    this.LoadCategorys();
  }

  LoadData(id: number, name?: string) {
    if (id === 0) {
      this.isLabel = 'Tất cả';
      this._products.getData().subscribe((response) => {
        this.listProducts = response;
      });
    } else {
      this.isLabel = name;
      this._products.getData().subscribe((response) => {
        this.listProducts = response.filter((a) => a.categoryId === id);
      });
    }
  }
  LoadCategorys() {
    this._categorys.getAllData().subscribe((response) => {
      this.categoris = response;
    });
  }

  OpenEdit(id: number) {
    sessionStorage.setItem('id', id.toString());
  }
}
