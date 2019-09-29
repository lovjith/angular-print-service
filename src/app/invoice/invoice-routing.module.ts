import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutComponent } from '../print-layout/print-layout.component';
import { InvoicePrintComponent } from './print/invoice-print.component';
import { InvoiceComponent } from './invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent },
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoicePrintComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
