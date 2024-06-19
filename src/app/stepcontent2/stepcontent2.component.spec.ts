import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepcontent2Component } from './stepcontent2.component';

describe('Stepcontent2Component', () => {
  let component: Stepcontent2Component;
  let fixture: ComponentFixture<Stepcontent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stepcontent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepcontent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
