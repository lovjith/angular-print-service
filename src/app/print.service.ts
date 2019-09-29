import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PrintService {
  isPrinting = false;
  private documentName: string;

  constructor(private router: Router) { }

  printDocument(documentName: string, documentData: string[]) {
    this.documentName = documentName;
    this.isPrinting = true;
    this.router.navigate(
      [this.documentName + '/',
      {
        outlets: {
          'print': ['print', documentName, documentData.join()]
        }
      }
      ]
    );
  }

  onDataReady() {
    setTimeout(() => {
      window.print();
      this.isPrinting = false;
      this.router.navigate([this.documentName + '/', { outlets: { print: null } }]);
    });
  }
}
