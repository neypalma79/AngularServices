import { Component } from '@angular/core';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.sass'],
})
export class ListaProductoComponent {
  constructor(public productoService: ProductoService) {}
}
