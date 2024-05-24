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

  // khai báo list trên này để đẩy ra fe
  listCategry : any[] = [];
  ngOnInit(): void {
    this.LoadingForm();
  }

  SumbitForm() {
    let category: any = this.CategoryForm.value;
    console.log(category);
  }

  OpenFormUpadte( list: any[] , id : number ) {
    this.isPopup = false;
    let item : any = list.find(a => a.id == id);
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

  UpdateCategory() {
    let category: any = this.CategoryForm.value;
    console.log(category);
  }
}
