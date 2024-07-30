import { TestBed } from '@angular/core/testing';

import { JsonplaceholderService, Post } from '../services/jsonplaceholder.service';
import { RestapiService } from '../services/restapi.service';
import { WebServiceError } from '../services/util';
import { provideHttpClient } from '@angular/common/http';

//Teste de integração
//Com suporte adicional da API de testes do Angular
//Usando o serviço RestapiService diretamente
describe('Integration test JsonplaceholderService', () => {
  let service: JsonplaceholderService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JsonplaceholderService,
        RestapiService,
        provideHttpClient()
      ],
    });
    service = TestBed.inject(JsonplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getPostById should return a Post object', (done) => {
    const id = 1;
    const expectedPost: Post = {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };
    service.getPostById(id).subscribe({
      next: (value) => {
        expect(value).toEqual(expectedPost);
        done();
      },
      error: (err) => done.fail(err),
    });
  });

  it('#getPostById should return an error when the server returns a 404', (done) => {
    const id = 1000;
    const expectedError: WebServiceError = {
      erro: {},
      mensagem: 'Status: 404 OK',
      mensagemOriginal: `Http failure response for https://jsonplaceholder.typicode.com/posts/${id}: 404 OK`
    };
    service.getPostById(id).subscribe({
      next: (value) => done.fail('should have failed with the 404 error'),
      error: (err) => {
        expect(err).toEqual(expectedError);
        done();
      },
    });
  });
});
