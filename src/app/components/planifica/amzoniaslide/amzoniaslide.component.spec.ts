import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmzoniaslideComponent } from './amzoniaslide.component';

describe('AmzoniaslideComponent', () => {
  let component: AmzoniaslideComponent;
  let fixture: ComponentFixture<AmzoniaslideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmzoniaslideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmzoniaslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
