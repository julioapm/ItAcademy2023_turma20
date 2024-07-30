import { TestBed } from '@angular/core/testing';
import { RestapiService } from './restapi.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { WebServiceError } from './util';

type DummyObject = {
  name: string;
  age: number;
};

//Teste unitário
//Com suporte adicional da API de testes do Angular
//HttpClient irá acessar um backend de teste ao invés de uma rede real
describe('RestapiService', () => {
  let service: RestapiService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(RestapiService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#get', () => {
    const dummyResponse: DummyObject = {
      name: 'test',
      age: 10
    };

    it('should return an Observable<DummyObject>', () => {
      service.get<DummyObject>('/test').subscribe({
        next: (data) => expect(data).toEqual(dummyResponse),
        error: fail,
      });
      const req = httpTesting.expectOne('/test', 'Request to get DummyObject from web service /test');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual('/test');
      req.flush(dummyResponse);
    });

    it('should return an error when the server returns a 404', () => {
      const error = new HttpErrorResponse({
        error: 'test',
        status: 404,
        statusText: 'Not Found'
      });
      const expectedError: WebServiceError = {
        erro: error,
        mensagem: 'Status: 404 Not Found',
        mensagemOriginal: 'Http failure response for /test: 404 Not Found'
      };
      service.get<any>('/test').subscribe({
        next: (data) => fail('should have failed with the 404 error'),
        error: (err) => expect(err).toEqual(expectedError)
      });
      const req = httpTesting.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual('/test');
      req.flush(error, { status: 404, statusText: 'Not Found' });
    });

    it('should return an error when network errors', () => {
      const error = new ProgressEvent('Network error');
      const expectedError = {
        erro: error,
        mensagem: 'Erro: Network error',
        mensagemOriginal: 'Http failure response for /test: 0 '
      };
      service.get<any>('/test').subscribe({
        next: (data) => fail('should have failed with network error'),
        error: (err) => expect(err).toEqual(expectedError),
      });
      const req = httpTesting.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual('/test');
      req.error(error);
    });
  });
});
