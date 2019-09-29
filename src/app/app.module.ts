import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintService } from './print.service';
import { PrintLayoutModule } from './print-layout/print-layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrintLayoutModule
  ],
  providers: [PrintService],
  bootstrap: [AppComponent]
})
export class AppModule { }
