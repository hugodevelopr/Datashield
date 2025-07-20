import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ropa.component.html',
  styleUrl: './ropa.component.scss'
})
export class RopaComponent {
  search = '';
  registros = [
    {
      id: 1,
      atividade: 'Gestão de Contratos',
      controlador: 'Empresa XYZ',
      operador: 'Fornecedor ABC',
      categoriaDados: 'Dados Cadastrais',
      finalidade: 'Execução de contrato',
      status: 'Ativo',
      dataCriacao: new Date(2025, 3, 22)
    },
    {
      id: 2,
      atividade: 'Envio de Marketing',
      controlador: 'Empresa XPTO',
      operador: 'Mail Service',
      categoriaDados: 'Contato',
      finalidade: 'Comunicação comercial',
      status: 'Inativo',
      dataCriacao: new Date(2025, 1, 12)
    },
  ];

  get registrosFiltrados() {
    return this.registros.filter(r =>
      r.atividade.toLowerCase().includes(this.search.toLowerCase()) ||
      r.controlador.toLowerCase().includes(this.search.toLowerCase()) ||
      r.operador.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  adicionarROPA() {
    // abrir modal ou redirecionar
    alert('Adicionar novo registro ROPA!');
  }

  exportar() {
    alert('Exportar tabela!');
  }

  visualizar(registro: any) {
    alert(`Visualizar: ${registro.atividade}`);
  }
}
