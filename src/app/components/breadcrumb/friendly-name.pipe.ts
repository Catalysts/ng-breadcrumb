import { Pipe, PipeTransform } from '@angular/core';
import {BreadcrumbService} from './breadcrumb.service';

@Pipe({
  name: 'friendlyName'
})
export class FriendlyNamePipe implements PipeTransform {

  constructor(private breadcrumbService: BreadcrumbService) {}

  transform(url: string): any {
    return this.breadcrumbService.getFriendlyNameForRoute(url);
  }

}
