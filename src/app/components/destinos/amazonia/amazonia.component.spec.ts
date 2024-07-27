import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazoniaComponent } from './amazonia.component';

describe('AmazoniaComponent', () => {
  let component: AmazoniaComponent;
  let fixture: ComponentFixture<AmazoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmazoniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmazoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
