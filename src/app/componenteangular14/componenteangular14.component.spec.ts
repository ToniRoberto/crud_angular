import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteangular14Component } from './componenteangular14.component';

describe('Componenteangular14Component', () => {
  let component: Componenteangular14Component;
  let fixture: ComponentFixture<Componenteangular14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteangular14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteangular14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
