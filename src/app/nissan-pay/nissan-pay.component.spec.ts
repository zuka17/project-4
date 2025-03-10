import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanPayComponent } from './nissan-pay.component';

describe('NissanPayComponent', () => {
  let component: NissanPayComponent;
  let fixture: ComponentFixture<NissanPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NissanPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NissanPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
