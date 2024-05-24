import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent implements OnInit {
  constructor(private form: FormBuilder) {}
  productForm = this.form.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    size: ['', Validators.required],
    descrition: [''],
    category: ['', Validators.required],
    // file này chỉ dùng để kiểm lỗi cho form
    file: ['', Validators.required],
  });

  Files: File[] = [];

  ngOnInit(): void {}

  SumbitForm() {
    let valueForm: any = this.productForm.value;
    // thông tin sản phẩm để gửi về serve
    console.log(valueForm);
    // thông tin hình ảnh để gửi về serve
    console.log(this.Files);
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

  // lấy dữ liều từ api ra form
  RenderForm(response : any){
    // this.productForm.get('name')!.setValue( --truyền dữ liều vào đây--- );
  }
}