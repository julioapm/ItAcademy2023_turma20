import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTemplateDrivenComponent } from './cadastro-template-driven.component';

describe('CadastroTemplateDrivenComponent', () => {
  let component: CadastroTemplateDrivenComponent;
  let fixture: ComponentFixture<CadastroTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTemplateDrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
