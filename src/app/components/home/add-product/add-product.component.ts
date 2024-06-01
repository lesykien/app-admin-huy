import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { _productsModel, productsForm } from '../../../model/products.model';
import { CategorysService } from '../../../services/categorys.service';
import { categoryDTOs } from '../../../model/category.model';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  constructor(
    private form: FormBuilder,
    private _category: CategorysService,
    private _products: ProductsService
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
    this.LoadOptions();
  }

  SumbitForm() {
    let valueForm: productsForm = this.productForm.value as productsForm;
    let form = _productsModel.FormRequest(valueForm, this.Files);
    this._products.create(form).subscribe((response) => {
      if (response) {
        alert('Thêm sản phẩm thành công');
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

  LoadOptions() {
    this._category.getAllData().subscribe((response) => {
      this.options = response;
    });
  }
}
