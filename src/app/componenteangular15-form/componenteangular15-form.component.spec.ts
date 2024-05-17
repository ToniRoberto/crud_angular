import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenteangular15FormComponent } from './componenteangular15-form.component';

describe('Componenteangular15FormComponent', () => {
  let component: Componenteangular15FormComponent;
  let fixture: ComponentFixture<Componenteangular15FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componenteangular15FormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componenteangular15FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
