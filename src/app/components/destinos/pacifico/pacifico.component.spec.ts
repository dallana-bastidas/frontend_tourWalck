import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificoComponent } from './pacifico.component';

describe('PacificoComponent', () => {
  let component: PacificoComponent;
  let fixture: ComponentFixture<PacificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
