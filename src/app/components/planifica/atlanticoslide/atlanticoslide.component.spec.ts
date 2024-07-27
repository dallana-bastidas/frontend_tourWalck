import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlanticoslideComponent } from './atlanticoslide.component';

describe('AtlanticoslideComponent', () => {
  let component: AtlanticoslideComponent;
  let fixture: ComponentFixture<AtlanticoslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlanticoslideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlanticoslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
