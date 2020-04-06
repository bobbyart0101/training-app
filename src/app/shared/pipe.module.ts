import {NgModule} from '@angular/core';
import {DatePipe} from '../pipes/date/date.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        DatePipe
    ],
    exports: [
        DatePipe
    ]
})
export class PipesModule {
}
