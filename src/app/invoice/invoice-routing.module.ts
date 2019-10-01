import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutComponent } from '../print-layout/print-layout.component';
import { InvoicePrintComponent } from './print/invoice-print.component';
import { InvoiceComponent } from './invoice.component';
import { DuplicateInvoiceComponent } from './duplicate-invoice/duplicate-invoice.component';

const routes: Routes = [
  // { path: '', component: InvoiceComponent },
  { path: '', redirectTo: 'original', pathMatch: 'full' },
  { path: 'original', component: InvoiceComponent },
  { path: 'duplicate', component: DuplicateInvoiceComponent },
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
