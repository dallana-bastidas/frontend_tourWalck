import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinaComponent } from './andina.component';

describe('AndinaComponent', () => {
  let component: AndinaComponent;
  let fixture: ComponentFixture<AndinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
