import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepcontent3Component } from './stepcontent3.component';

describe('Stepcontent3Component', () => {
  let component: Stepcontent3Component;
  let fixture: ComponentFixture<Stepcontent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepcontent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepcontent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
