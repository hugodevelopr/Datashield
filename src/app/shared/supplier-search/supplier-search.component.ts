import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './supplier-search.component.html',
  styleUrl: './supplier-search.component.scss'
})
export class SupplierSearchComponent {
  query = '';
  @Output() search = new EventEmitter<string>();

  emitSearch() {
    this.search.emit(this.query);
  }
}
