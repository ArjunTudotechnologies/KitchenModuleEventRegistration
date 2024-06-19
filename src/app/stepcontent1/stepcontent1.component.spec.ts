import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Stepcontent1Component } from './stepcontent1.component';

describe('Stepcontent1Component', () => {
  let component: Stepcontent1Component;
  let fixture: ComponentFixture<Stepcontent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule,Stepcontent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stepcontent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
