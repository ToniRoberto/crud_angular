import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteprojeto12Component } from './componenteprojeto12.component';

describe('Componenteprojeto12Component', () => {
  let component: Componenteprojeto12Component;
  let fixture: ComponentFixture<Componenteprojeto12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteprojeto12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteprojeto12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
