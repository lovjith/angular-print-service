import { Routes } from '@angular/router';
import { PrintLayoutComponent } from '../print-layout/print-layout.component';
import { InvoicePrintComponent } from './print/invoice-print.component';

export const InvoiceRoutes: Routes = [
    {
        path: 'invoice',
        loadChildren: 'app/invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'invoice/print',
        outlet: 'print',
        component: PrintLayoutComponent,
        children: [
            { path: 'invoice/:invoiceIds', component: InvoicePrintComponent }
        ],
    },

];
