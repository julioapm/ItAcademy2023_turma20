import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services/calculadora.service';

//Teste unitário
//Somente a classe
describe('CalculadoraComponent (class)', () => {
  let calculadoraComponent: CalculadoraComponent;
  let calculadoraServiceSpy: jasmine.SpyObj<CalculadoraService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CalculadoraService', ['somar']);
    TestBed.configureTestingModule({
      providers: [
        CalculadoraComponent,
        { provide: CalculadoraService, useValue: spy },
      ],
    });
    calculadoraComponent = TestBed.inject(CalculadoraComponent);
    calculadoraServiceSpy = TestBed.inject(CalculadoraService) as jasmine.SpyObj<CalculadoraService>;
  });

  it('should create', () => {
    expect(calculadoraComponent).toBeDefined();
  });

  it('should have valor1, valor2 and resultado zeroed', () => {
    expect(calculadoraComponent.valor1).toBe(0);
    expect(calculadoraComponent.valor2).toBe(0);
    expect(calculadoraComponent.resultado).toBe(0);
  });

  it('should call service method somar with correct params on click', () => {
    calculadoraComponent.valor1 = 1;
    calculadoraComponent.valor2 = 1;
    calculadoraComponent.onSomarButtonClick();
    expect(calculadoraServiceSpy.somar).toHaveBeenCalledTimes(1);
    expect(calculadoraServiceSpy.somar).toHaveBeenCalledWith(calculadoraComponent.valor1, calculadoraComponent.valor2);
  });
});

//Teste unitário
//Componente completo
describe('CalculadoraComponent (class + view)', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain valor1Input zeroed', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const valor1InputElement = compiled.querySelector('#valor1Input') as HTMLInputElement;
    expect(valor1InputElement.valueAsNumber).toBe(0);
  });
});
