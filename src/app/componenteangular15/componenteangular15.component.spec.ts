import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteangular15Component } from './componenteangular15.component';

describe('Componenteangular15Component', () => {
  let component: Componenteangular15Component;
  let fixture: ComponentFixture<Componenteangular15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteangular15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteangular15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
