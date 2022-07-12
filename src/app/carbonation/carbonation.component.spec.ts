import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonationComponent } from './carbonation.component';

describe('CarbonationComponent', () => {
  let component: CarbonationComponent;
  let fixture: ComponentFixture<CarbonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
