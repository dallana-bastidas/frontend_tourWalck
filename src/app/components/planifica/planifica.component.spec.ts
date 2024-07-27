import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificaComponent } from './planifica.component';

describe('PlanificaComponent', () => {
  let component: PlanificaComponent;
  let fixture: ComponentFixture<PlanificaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
