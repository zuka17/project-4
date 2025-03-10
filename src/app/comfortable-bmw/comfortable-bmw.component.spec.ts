import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfortableBmwComponent } from './comfortable-bmw.component';

describe('ComfortableBmwComponent', () => {
  let component: ComfortableBmwComponent;
  let fixture: ComponentFixture<ComfortableBmwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComfortableBmwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComfortableBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
