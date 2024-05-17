import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteangular16Component } from './componenteangular16.component';

describe('Componenteangular16Component', () => {
  let component: Componenteangular16Component;
  let fixture: ComponentFixture<Componenteangular16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteangular16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteangular16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
