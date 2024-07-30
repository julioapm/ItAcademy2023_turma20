import { TestBed } from '@angular/core/testing';

import { JsonplaceholderService, Post } from './jsonplaceholder.service';
import { RestapiService } from './restapi.service';
import { of } from 'rxjs';
import { WebServiceError } from './util';
import { asyncError } from '../testing/async-observable-helpers';

//Teste unitário
//Com suporte adicional da API de testes do Angular
//Usando o serviço RestapiService através de um dublê
describe('JsonplaceholderService', () => {
  let service: JsonplaceholderService;
  let restapiServiceSpy: jasmine.SpyObj<RestapiService>;
  
  beforeEach(() => {
    const spy = jasmine.createSpyObj('RestapiService', ['get']);
    TestBed.configureTestingModule({
      providers: [
        JsonplaceholderService,
        { provide: RestapiService, useValue: spy }
      ],
    });
    service = TestBed.inject(JsonplaceholderService);
    restapiServiceSpy = TestBed.inject(RestapiService) as jasmine.SpyObj<RestapiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPostById should call RestapiService.get and return a Post object', (done) => {
    const id = 1;
    const expectedPost: Post = {
      userId: 1,
      id: 1,
      title: 'title',
      body: 'body',
    };
    restapiServiceSpy.get.and.returnValue(of(expectedPost));
    service.getPostById(id).subscribe({
      next: (value) => {
        expect(value).toEqual(expectedPost);
        done();
      },
      error: (err) => done.fail(err),
    });
    expect(restapiServiceSpy.get).toHaveBeenCalledTimes(1);
    expect(restapiServiceSpy.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${id}`);
  });

  it('#getPostById should return an error when the server returns a 404', (done) => {
    const id = 1000;
    const expectedError: WebServiceError = {
      erro: '404 Not Found',
      mensagem: 'Status: 404 Not Found',
      mensagemOriginal: `Http failure response for https://jsonplaceholder.typicode.com/posts/${id}: 404 Not Found`
    };
    restapiServiceSpy.get.and.returnValue(asyncError(expectedError));
    service.getPostById(id).subscribe({
      next: (value) => done.fail('should have failed with the 404 error'),
      error: (err) => {
        expect(err).toEqual(expectedError);
        done();
      },
    });
  });
});
