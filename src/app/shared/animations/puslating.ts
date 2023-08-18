import { trigger, state, style, animate, transition } from '@angular/animations';

export const puslating = [trigger('pulsating', [
    state('initial', style({ transform: 'scale(0.6)' })),
    state('puslate', style({ transform: 'scale(1)' })),
    transition('initial <=> puslate', [animate('0.5s ease-in-out')]),
  ])];