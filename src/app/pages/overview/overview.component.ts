import { Component, EventEmitter, Output } from '@angular/core';
import { DashboardCardsComponent } from '../../shared/dashboard-cards/dashboard-cards.component';
import { DashboardTabsComponent } from '../../shared/dashboard-tabs/dashboard-tabs.component';
import { CommonModule } from '@angular/common';
import { SupplierSearchComponent } from '../../shared/supplier-search/supplier-search.component';
import { SupplierListComponent } from '../../shared/supplier-list/supplier-list.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    CommonModule,    
    DashboardCardsComponent,
    DashboardTabsComponent,
    SupplierSearchComponent,
    SupplierListComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

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
