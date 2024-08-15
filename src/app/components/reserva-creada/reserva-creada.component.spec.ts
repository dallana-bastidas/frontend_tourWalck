import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCreadaComponent } from './reserva-creada.component';

describe('ReservaCreadaComponent', () => {
  let component: ReservaCreadaComponent;
  let fixture: ComponentFixture<ReservaCreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaCreadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
