import { CanDeactivateFn } from '@angular/router';
import { AddCvComponent } from '../cv/add-cv/add-cv.component';

export const unsavedChangesGuard: CanDeactivateFn<AddCvComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
