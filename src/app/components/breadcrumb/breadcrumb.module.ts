import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

export * from './breadcrumb.component';
export * from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: [BreadcrumbService]
})
export class NgBreadcrumbModule {
}