import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {

  constructor (
    private form : FormBuilder
  ){}

  productForm = this.form.group({
    name : ['', Validators.required],
    price : ['', Validators.required],
    size : ['', Validators.required],
    descrition : [''],
    category : ['' , Validators.required], 
    files : ['', Validators.required]
  })

  ngOnInit(): void {

  }

  SumbitForm(){
    let valueForm : any = this.productForm.value;
    console.log(valueForm);
  }

}
