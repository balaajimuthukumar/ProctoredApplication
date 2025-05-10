import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { typeSelectionGuard } from './type-selection.guard';
import { TypeselectionComponent } from '../../feature/typeselection/typeselection.component'; // or the correct path

describe('typeSelectionGuard', () => {
  const executeGuard: CanDeactivateFn<TypeselectionComponent> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => typeSelectionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
