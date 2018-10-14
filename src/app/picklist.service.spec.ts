import { TestBed } from '@angular/core/testing';

import { PicklistService } from './picklist.service';

describe('PicklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicklistService = TestBed.get(PicklistService);
    expect(service).toBeTruthy();
  });
});
