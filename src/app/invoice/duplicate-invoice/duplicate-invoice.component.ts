import { Component, OnInit } from '@angular/core';
import { PrintService } from 'src/app/print.service';

@Component({
  selector: 'app-duplicate-invoice',
  templateUrl: './duplicate-invoice.component.html',
  styleUrls: ['./duplicate-invoice.component.css']
})
export class DuplicateInvoiceComponent implements OnInit {
  title = 'Duplicate Invoice';

  constructor(public printService: PrintService) { }

  ngOnInit() {
  }

  onPrintInvoice() {
    const invoiceIds = ['DUP-101', 'DUP-102'];
    this.printService.printDocument('invoice', invoiceIds);
  }

}
