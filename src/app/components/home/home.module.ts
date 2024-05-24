import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';



const _router: Routes = [
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'add', component: AddProductComponent },
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild(_router)
  ]
})
export class HomeModule { }
