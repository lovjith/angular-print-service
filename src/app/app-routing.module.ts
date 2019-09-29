import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'print',
  //   outlet: 'print',
  //   component: PrintLayoutComponent,
  //   children: [
  //     { path: 'invoice-print/:invoiceIds', component: InvoicePrintComponent }
  //   ],
  // },
  { path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
