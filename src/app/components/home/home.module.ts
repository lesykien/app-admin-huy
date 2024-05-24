import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



const _router: Routes = [
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: 'product', component: ProductsComponent },
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent
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
