import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'dateDisplay',
})
export class DateDisplayPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(date: Timestamp | undefined): string {
    return this.datePipe.transform(date?.toMillis(), 'short') ?? '';
  }
}
