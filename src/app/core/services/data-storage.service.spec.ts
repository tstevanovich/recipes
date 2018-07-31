import { inject, TestBed } from '@angular/core/testing';
import { DataStorageService } from '@app/core/services/data-storage.service';

describe('DataStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStorageService]
    });
  });

  it('should be created', inject([DataStorageService], (service: DataStorageService) => {
    expect(service).toBeTruthy();
  }));
});
