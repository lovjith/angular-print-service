import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  title = 'Invoice';

  constructor(public printService: PrintService) { }

  ngOnInit() {
  }

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService.printDocument('invoice', invoiceIds);
  }

}
