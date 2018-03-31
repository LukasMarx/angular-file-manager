/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileService } from './file.service';

describe('Service: File', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileService]
    });
  });

  it('should ...', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});