import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'datePipe'
})
export class DatePipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (value) {
            const dateData = value.split('T');
            const dateObj = new Date(dateData);
            return new Intl.DateTimeFormat('en-GB').format(dateObj);
        }
    }

}
