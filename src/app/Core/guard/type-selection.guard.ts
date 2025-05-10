import { CanDeactivateFn } from '@angular/router';

export const typeSelectionGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
