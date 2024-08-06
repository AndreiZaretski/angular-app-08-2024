import { inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly iconRegistry = inject(MatIconRegistry);

  private readonly sanitizer = inject(DomSanitizer);

  add(name: string, source: string): void {
    this.iconRegistry.addSvgIconLiteral(name, this.sanitizer.bypassSecurityTrustHtml(source));
  }

  addPath(name: string, path: string): void {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(path));
  }
}
