import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteprojetoapi13Component } from './componenteprojetoapi13.component';

describe('Componenteprojetoapi13Component', () => {
  let component: Componenteprojetoapi13Component;
  let fixture: ComponentFixture<Componenteprojetoapi13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteprojetoapi13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteprojetoapi13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
