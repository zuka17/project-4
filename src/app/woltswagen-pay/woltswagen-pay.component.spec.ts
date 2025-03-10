import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoltswagenPayComponent } from './woltswagen-pay.component';

describe('WoltswagenPayComponent', () => {
  let component: WoltswagenPayComponent;
  let fixture: ComponentFixture<WoltswagenPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoltswagenPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoltswagenPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
