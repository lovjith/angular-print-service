import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { PrintLayoutModule } from '../print-layout/print-layout.module';
import { InvoiceComponent } from './invoice.component';
import { InvoicePrintComponent } from './print/invoice-print.component';
import { DuplicateInvoiceComponent } from './duplicate-invoice/duplicate-invoice.component';

@NgModule({
  declarations: [
    InvoiceComponent,
    InvoicePrintComponent,
    DuplicateInvoiceComponent,
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    PrintLayoutModule
  ]
})
export class InvoiceModule { }
