import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteangular15TabelaComponent } from './componenteangular15-tabela.component';

describe('Componenteangular15TabelaComponent', () => {
  let component: Componenteangular15TabelaComponent;
  let fixture: ComponentFixture<Componenteangular15TabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteangular15TabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteangular15TabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
