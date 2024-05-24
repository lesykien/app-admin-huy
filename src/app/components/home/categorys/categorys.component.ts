import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss',
})
export class CategorysComponent implements OnInit {
  constructor(private form: FormBuilder) {}
  CategoryForm = this.form.group({
    name: ['', Validators.required],
  });
  isPopup: boolean = true;
  ngOnInit(): void {}

  SumbitForm() {
    let category: any = this.CategoryForm.value;
    console.log(category);
  }

  OpenFormUpadte() {
    this.isPopup = false;
    // this.CategoryForm.get('name')!.setValue( --truyền dữ liều vào đây--- );
    this.CategoryForm.get('name')!.setValue("adadad");
  }

  ClosePopup(){
    this.isPopup = true;
    this.CategoryForm.get('name')!.setValue("");
  }

  UpdateCategory() {
    let category: any = this.CategoryForm.value;
    console.log(category);
  }
}
