import { animate, style, transition, trigger } from '@angular/animations';

export const FadeInAnimation = trigger('fade', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms {{animationDelay}}ms', style({ opacity: 1 })),
    ], { params: { animationDelay: 0 } })
]);
