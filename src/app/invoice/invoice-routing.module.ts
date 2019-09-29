import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutComponent } from '../print-layout/print-layout.component';
import { InvoicePrintComponent } from './print/invoice-print.component';

const routes: Routes = [
  {
    path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoicePrintComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
