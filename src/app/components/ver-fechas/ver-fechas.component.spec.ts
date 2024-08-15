import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFechasComponent } from './ver-fechas.component';

describe('VerFechasComponent', () => {
  let component: VerFechasComponent;
  let fixture: ComponentFixture<VerFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFechasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
