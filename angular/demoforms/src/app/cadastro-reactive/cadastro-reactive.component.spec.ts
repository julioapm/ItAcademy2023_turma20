import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroReactiveComponent } from './cadastro-reactive.component';

describe('CadastroReactiveComponent', () => {
  let component: CadastroReactiveComponent;
  let fixture: ComponentFixture<CadastroReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
