import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteprojeto11Component } from './componenteprojeto11.component';

describe('Componenteprojeto11Component', () => {
  let component: Componenteprojeto11Component;
  let fixture: ComponentFixture<Componenteprojeto11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteprojeto11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteprojeto11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
