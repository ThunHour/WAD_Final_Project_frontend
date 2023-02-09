import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardPageComponent } from './motherboard-page.component';

describe('MotherboardPageComponent', () => {
  let component: MotherboardPageComponent;
  let fixture: ComponentFixture<MotherboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
