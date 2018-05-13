import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(categories: any[], searchText: any): any[] {
    if (!categories) return [];
    if (!searchText) return categories;
    searchText = searchText.toLowerCase();
    return categories.filter(cat => {
      return cat.toLowerCase().startsWith(searchText);
    });
  }
}
