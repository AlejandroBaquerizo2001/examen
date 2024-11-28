import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { HuaconGregoryProductModalComponent } from '../huacon-gregory-product-modal/huacon-gregory-product-modal.component';

interface Product {
  code: string;
  description: string;
  purchasePrice: number;
  sellingPrice: number;
}

@Component({
  selector: 'app-huacongregoryproducto',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './huacongregoryproducto.component.html',
  styleUrls: ['./huacongregoryproducto.component.css']
})
export class HuacongregoryproductoComponent {
  products: Product[] = [];
  code: string = '';
  description: string = '';
  purchasePrice: number | null = null;
  sellingPrice: number | null = null;
  message: string = '';

  constructor(private dialog: MatDialog, private router: Router) {}

  addProduct() {
    if (!this.code || !this.description || this.purchasePrice === null || this.sellingPrice === null) {
      this.message = 'Todos los campos son obligatorios.';
      return;
    }

    const newProduct: Product = {
      code: this.code,
      description: this.description,
      purchasePrice: this.purchasePrice,
      sellingPrice: this.sellingPrice,
    };

    this.products.push(newProduct);
    this.clearFields();
    this.message = 'Producto agregado exitosamente.';
  }

  consult() {
    const dialogRef = this.dialog.open(HuaconGregoryProductModalComponent, {
      data: {
        products: this.products,
        deleteProduct: (index: number) => this.deleteProduct(index),
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Manejar lo que sucede después de cerrar el modal si es necesario
    });
  }

  clearFields() {
    this.code = '';
    this.description = '';
    this.purchasePrice = null;
    this.sellingPrice = null;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  close() {
    this.router.navigate(['/huacon-gregory-login']);
  }
}
