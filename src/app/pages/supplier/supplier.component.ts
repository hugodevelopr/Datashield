import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardTabsComponent } from '../../shared/dashboard-tabs/dashboard-tabs.component';
import { SupplierSearchComponent } from '../../shared/supplier-search/supplier-search.component';
import { SupplierListComponent } from '../../shared/supplier-list/supplier-list.component';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [
    CommonModule,
    DashboardTabsComponent,
    SupplierSearchComponent,
    SupplierListComponent
  ],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {
  activeTab = 0;
  search = '';

  suppliers = [
    { nome: 'Fornecedor A', score: 85, ultimaAvaliacao: new Date(2025, 6, 1) },
    { nome: 'Fornecedor B', score: 72, ultimaAvaliacao: new Date(2025, 5, 20) },
  ];

  get filteredSuppliers() {
    return this.suppliers.filter(s => s.nome.toLowerCase().includes(this.search.toLowerCase()));
  }

  onSearch(q: string) {
    this.search = q;
  }

}
