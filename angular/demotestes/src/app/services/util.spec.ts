import { HttpErrorResponse } from '@angular/common/http';
import { tratadorErro, WebServiceError } from './util';

//Teste unitário
//Sem suporte adicional da API de testes do Angular
describe('Util helper functions', () => {
    describe('tratadorErro', () => {
      it('should throw an error object when HttpError', (done) => {
        const error = new HttpErrorResponse({
          error: 'test',
          status: 404,
          statusText: 'Not Found'
        });
        const expectedError: WebServiceError = {
          erro: 'test',
          mensagem: 'Status: 404 Not Found',
          mensagemOriginal: 'Http failure response for (unknown url): 404 Not Found'
        };
        tratadorErro(error).subscribe({
            next() {
                done.fail('should have failed with the 404 error');
            },
            error(err) {
                expect(err).toEqual(expectedError);
                done();
            },
        });
      });
  
      it('should throw an error object when ProgressEvent', (done) => {
        const error = new HttpErrorResponse({
          error: new ProgressEvent('Network error')
        });
        const expectedError = {
          erro: error.error,
          mensagem: 'Erro: Network error',
          mensagemOriginal: 'Http failure response for (unknown url): undefined undefined'
        };
        tratadorErro(error).subscribe({
            next() {
                done.fail('should have failed with network error');
            },
            error(err) {
                expect(err).toEqual(expectedError);
                done();
            },
        });
      });
    });
  });
  