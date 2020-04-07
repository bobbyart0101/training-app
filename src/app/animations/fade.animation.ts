import {trigger, state, animate, style, transition, keyframes, group, query, stagger} from '@angular/animations';

export const $animations = [

    trigger('fadeAnimation', [
        transition(':enter', [
            style({opacity: 0}),
            animate('{{timing}} ease-in', style('*'))
        ], {params: {timing: '1s'}}),
    ])
];
