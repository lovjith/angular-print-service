import { NgModule } from '@angular/core';
import { PrintLayoutComponent } from './print-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PrintLayoutComponent],
    imports: [RouterModule],
    exports: [PrintLayoutComponent]
})
export class PrintLayoutModule { }
