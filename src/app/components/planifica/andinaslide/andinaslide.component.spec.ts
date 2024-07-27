import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndinaslideComponent } from './andinaslide.component';

describe('AndinaslideComponent', () => {
  let component: AndinaslideComponent;
  let fixture: ComponentFixture<AndinaslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndinaslideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndinaslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
