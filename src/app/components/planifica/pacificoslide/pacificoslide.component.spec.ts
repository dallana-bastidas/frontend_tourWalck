import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificoslideComponent } from './pacificoslide.component';

describe('PacificoslideComponent', () => {
  let component: PacificoslideComponent;
  let fixture: ComponentFixture<PacificoslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacificoslideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacificoslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
