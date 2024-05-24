import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ConfirmationOrdersComponent } from './confirmation-orders/confirmation-orders.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { HistoryOrderComponent } from './history-order/history-order.component';
import { CategorysComponent } from './categorys/categorys.component';
import { UsersComponent } from './users/users.component';
import { AccountAdminComponent } from './account-admin/account-admin.component';



const _router: Routes = [
  { 
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'confirmation', component: ConfirmationOrdersComponent },
      { path: 'delivery', component: DeliveryOrdersComponent },
      { path: 'history', component: HistoryOrderComponent },
    ]
  }
]

@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    ConfirmationOrdersComponent,
    DeliveryOrdersComponent,
    HistoryOrderComponent,
    CategorysComponent,
    UsersComponent,
    AccountAdminComponent
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
