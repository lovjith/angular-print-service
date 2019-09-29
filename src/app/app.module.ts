import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { InvoicePrintComponent } from './invoice/print/invoice-print.component';
import { PrintService } from './print.service';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent,
    InvoicePrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
