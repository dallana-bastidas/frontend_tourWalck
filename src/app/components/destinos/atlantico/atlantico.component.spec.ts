import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlanticoComponent } from './atlantico.component';

describe('AtlanticoComponent', () => {
  let component: AtlanticoComponent;
  let fixture: ComponentFixture<AtlanticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlanticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlanticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
