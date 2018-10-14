import { TestBed } from '@angular/core/testing';

import { UpdatecontentService } from './updatecontent.service';

describe('UpdatecontentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatecontentService = TestBed.get(UpdatecontentService);
    expect(service).toBeTruthy();
  });
});
