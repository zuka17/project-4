import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoltswagenComponent } from './woltswagen.component';

describe('WoltswagenComponent', () => {
  let component: WoltswagenComponent;
  let fixture: ComponentFixture<WoltswagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WoltswagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoltswagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
