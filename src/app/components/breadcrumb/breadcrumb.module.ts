import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';
import { FriendlyNamePipe } from './friendly-name.pipe';

export * from './breadcrumb.component';
export * from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    FriendlyNamePipe
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: [BreadcrumbService]
})
export class NgBreadcrumbModule {
}