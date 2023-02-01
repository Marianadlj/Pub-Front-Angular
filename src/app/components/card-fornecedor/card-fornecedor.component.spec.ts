import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFornecedorComponent } from './card-fornecedor.component';

describe('CardFornecedorComponent', () => {
  let component: CardFornecedorComponent;
  let fixture: ComponentFixture<CardFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
