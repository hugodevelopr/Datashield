import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-tabs',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard-tabs.component.html',
  styleUrl: './dashboard-tabs.component.scss'
})
export class DashboardTabsComponent {
  @Input() activeTab = 0;
  @Output() tabChange = new EventEmitter<number>();

  selectTab(i: number) {
    this.tabChange.emit(i);
  }
}
