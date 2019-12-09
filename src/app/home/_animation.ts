import { trigger, state, style, transition, animate } from '@angular/animations';

export const INDICATOR_ROTATE = trigger('indicatorRotate', [
  state('open', style({
    transform: 'rotate(90deg)'
  })),
  state('closed', style({
    transform: 'rotate(0deg)'
  })),
  transition('open <=> closed', [
    animate('0.4s')
  ])
])
