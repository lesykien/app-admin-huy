import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategorysService } from '../../../services/categorys.service';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss',
})
export class CategorysComponent implements OnInit {
  constructor(private form: FormBuilder, private _category: CategorysService) {}
  CategoryForm = this.form.group({
    name: ['', Validators.required],
  });
  isPopup: boolean = true;
  id: number = 0;

  // khai báo list trên này để đẩy ra fe
  listCategry: any[] = [];
  ngOnInit(): void {
    this.LoadingForm();
  }

  SumbitForm() {
    let category: any = this.CategoryForm.value;
    let form: FormData = new FormData();
    form.append('name', category.name);
    this._category.create(form).subscribe((response) => {});
    alert('Thêm loại sản phẩm thành công');
    window.location.reload();
  }

  OpenFormUpadte(list: any[], id: number) {
    this.isPopup = false;
    let item: any = list.find((a) => a.id == id);
    this.id = id;
    this.CategoryForm.get('name')!.setValue(item.name);
  }

  LoadingForm() {
    this._category.getAllData().subscribe((response) => {
      // gắn giá trị lại cho list
      this.listCategry = response;
      console.log(response);
    });
  }

  ClosePopup() {
    this.isPopup = true;
    this.CategoryForm.get('name')!.setValue('');
  }

  UpdateCategory(id: number) {
    let category: any = this.CategoryForm.value;
    let form: FormData = new FormData();
    form.append('newName', category.name);
    this._category.update(id, form).subscribe((response) => {});
    alert('Cập nhật lại sản phẩm thành công');
    window.location.reload();
  }
}
