import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordPayComponent } from './ford-pay.component';

describe('FordPayComponent', () => {
  let component: FordPayComponent;
  let fixture: ComponentFixture<FordPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FordPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FordPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
