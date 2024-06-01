import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import {
  _productsModel,
  productsDetal,
  productsForm,
} from '../../../model/products.model';
import { categoryDTOs } from '../../../model/category.model';
import { CategorysService } from '../../../services/categorys.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private _product: ProductsService,
    private _category: CategorysService
  ) {}
  productForm = this.form.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    size: ['', Validators.required],
    descrition: [''],
    category: ['', Validators.required],
    color: ['', Validators.required],
    hair_loss: ['', Validators.required],
    popularity: ['', Validators.required],
    sex: ['', Validators.required],
    style_hair: ['', Validators.required],
    quantity: ['', Validators.required],
    file: ['', Validators.required],
  });

  Files: File[] = [];
  options: categoryDTOs[] = [];

  ngOnInit(): void {
    this.LoadPage();
    this.LoadOptions();
  }

  LoadOptions() {
    this._category.getAllData().subscribe((response) => {
      this.options = response;
    });
  }

  SumbitForm() {
    let valueForm: any = this.productForm.value;
    let form = _productsModel.FormRequest(valueForm, this.Files);
    let id: number = Number(sessionStorage.getItem('id'));
    this._product.update(id, form).subscribe((response) => {
      if(response){
        alert('Cập nhật sản phẩm thành công');
        window.location.reload();
      }
    });
  }

  // lấy thông tin hình ảnh
  onFilesSelected(event: any) {
    this.Files = [];
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        this.Files.push(file);
      };
      reader.readAsDataURL(file);
    }
  }

  LoadPage() {
    let id: number = Number(sessionStorage.getItem('id'));
    this._product.getById(id).subscribe((response) => {
      this.RenderForm(response);
    });
  }

  // lấy dữ liều từ api ra form
  RenderForm(response: productsDetal[]) {
    this.productForm.get('name')!.setValue(response[0].name);
    this.productForm.get('color')!.setValue(response[0].color);
    this.productForm.get('descrition')!.setValue(response[0].description);
    this.productForm.get('hair_loss')!.setValue(response[0].statusHair);
    this.productForm.get('popularity')!.setValue(response[0].popular);
    this.productForm.get('price')!.setValue(response[0].price.toString());
    this.productForm.get('quantity')!.setValue(response[0].stock.toString());
    this.productForm.get('sex')!.setValue(response[0].sex.toString());
    this.productForm.get('size')!.setValue(response[0].size);
    this.productForm.get('style_hair')!.setValue(response[0].hair);
    this.productForm
      .get('category')!
      .setValue(response[0].categoryId.toString());
  }
}
