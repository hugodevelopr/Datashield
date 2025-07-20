import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { EvaluationComponent } from './pages/evalution/evalution.component';
import { RopaComponent } from './pages/ropa/ropa.component';
import { SupplierCreateComponent } from './pages/supplier-create/supplier-create.component';

export const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        data: {
            title: 'Visão Geral',
        }
    },
    {
        path: 'suppliers',
        component: SupplierComponent,
        data: {
            title: 'Fornecedores'
        }
    },
    {
        path: 'supplier-create',
        component: SupplierCreateComponent,
        data: {
            title: 'Criar Fornecedor'
        }
    },
    {
        path: 'evaluation',
        component: EvaluationComponent,
        data: {
            title: 'Avaliação'
        }
    },
    {
        path: 'ropa',
        component: RopaComponent,
        data: {
            title: 'ROPA'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];
