import { Injectable } from '@angular/core';
import * as interfaces from '../interfaces/lista-producto.interface';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  public productos: interfaces.Producto[] = [
    {
      id: 1,
      nombre: 'martillo',
      descripcion: 'marca truper',
      precio: 12,
    },
    {
      id: 2,
      nombre: 'martillo',
      descripcion: 'marca bosch',
      precio: 20,
    },
    {
      id: 3,
      nombre: 'taladro',
      descripcion: 'marca truper',
      precio: 40,
    },
  ];

  public productoAgregar: interfaces.Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
  };

  public idProductoEliminar: number = 0;

  public agregarProducto(): void {
    this.productos.push(this.productoAgregar);
  }

  public eliminarProducto(): void {
    this.productos = this.productos.filter((productoItem) => {
      return productoItem.id !== this.idProductoEliminar;
    });
  }
}
