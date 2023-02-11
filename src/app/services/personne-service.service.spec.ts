import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { PersonneServiceService } from './personne-service.service';

describe('PersonneServiceService', () => {
  let service: PersonneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PersonneServiceService);
    TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
