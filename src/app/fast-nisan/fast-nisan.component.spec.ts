import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastNisanComponent } from './fast-nisan.component';

describe('FastNisanComponent', () => {
  let component: FastNisanComponent;
  let fixture: ComponentFixture<FastNisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastNisanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastNisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
