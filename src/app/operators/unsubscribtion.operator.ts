import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Function used for observables unsubscription on copmonent destroy.
 * Function used in rxjs takeUnitl() method.
 * Example: this.observable$.pipe(takeUntil(this.unsubscribe$).subscribe(() => {...});
 */
export function Unsubscribable<T extends Constructor<{}>>(Base: T = (class {} as any)): any {

  return class extends Base implements OnDestroy {
    unsubscribe = new Subject<void>();

    ngOnDestroy(): void {
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
  };
}

export declare type Constructor<T> = new (...args: any[]) => T;
