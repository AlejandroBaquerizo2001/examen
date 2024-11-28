import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

interface Product {
  code: string;
  description: string;
  purchasePrice: number;
  sellingPrice: number;
}
@Component({
  selector: 'app-huacon-gregory-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './huacon-gregory-product-modal.component.html',
  styleUrl: './huacon-gregory-product-modal.component.css'
})
export class HuaconGregoryProductModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {
deleteProduct(_t14: any): unknown; products: Product[]
}) {}

}
