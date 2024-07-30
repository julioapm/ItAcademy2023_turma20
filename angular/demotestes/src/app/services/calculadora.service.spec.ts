import { CalculadoraService } from './calculadora.service';

//Teste unitário
//Sem suporte adicional da API de testes do Angular
describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    service = new CalculadoraService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Teste de método síncrono
  it('should calculate 0 + 0 = 0', () => {
    const value = service.somar(0, 0);
    expect(value).toEqual(0);
  });

  //Teste de método assíncrono com Observable
  it('should calculate 0 + 1 = 1', (done) => {
    service.somarAsyncObservable(0,1).subscribe(
      value => {
        expect(value).toEqual(1);
        done();
      }
    );
  });

  //Teste de método assíncrono com Promise
  it('should calculate 1 + 0 = 1', async () => {
    const value = await service.somarAsyncPromise(1, 0);
    expect(value).toEqual(1);
  });
});
